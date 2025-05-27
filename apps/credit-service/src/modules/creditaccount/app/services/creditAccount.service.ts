import type {
  CreditAccountDTO,
  CreditTransferDTO,
  TransactionDTO,
} from "../dto/creditaccount.types.ts";

import {
  toDomain,
  toDTO,
  toTransferDTO,
} from "../../infrastructure/mappers/creditaccount.mapper.ts";

import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper.ts";

import { createNewCreditAccount } from "../../domain/CreditAccountFactory.ts";

import type { CreditAccountRepository } from "../../infrastructure/repository/creditaccount.repository.ts";
import type { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository.ts";
import type { CreditTransferRepository } from "../../infrastructure/repository/creditTransfer.repository.ts";
import type { DomainEventPublisher } from "packages/rabbitmq/src/types.ts";
import { CreditAccountType } from "apps/credit-service/src/prisma/generated/client/index.js";
import {
  GiftAccountCreatedEvent,
  PrepaidAccountCreatedEvent,
} from "../../domain/events/creditAccountCreated.ts";
import type { PrepaidAccount } from "../../domain/CreditAccount.ts";
import {
  CreditAccountTypeEnum,
  NewCreditAccountInput,
} from "apps/credit-service/src/shared/types/input.types.ts";

export class CreditAccountService {
  constructor(
    private accountRepo: CreditAccountRepository,
    private transactionRepo: CreditTransactionRepository,
    private transferRepo: CreditTransferRepository,
    private eventPublisher: DomainEventPublisher,
  ) {}

  async createCreditAccount(
    input: NewCreditAccountInput,
  ): Promise<CreditAccountDTO> {
    const { type, email } = input;
    if (type === CreditAccountType.GIFT_CARD)
      return this.createGiftAccount(input.purchaseAmount, email);
    if (type === CreditAccountType.PREPAID_CARD)
      return this.createPrepaidAccount(
        input.treatmentCount,
        input.pricePerTreatment,
        email,
      );

    throw new Error(`Ugyldigt input til createCreditAccount. Type: ${type}`);
  }

  async createGiftAccount(
    purchaseAmount: number,
    email: string,
  ): Promise<CreditAccountDTO> {
    const account = createNewCreditAccount({
      type: CreditAccountTypeEnum.GIFT_CARD,
      email,
      purchaseAmount: purchaseAmount,
    });

    const saved = await this.accountRepo.create(account.getDataToPersist());

    await this.transactionRepo.logPurchase(
      saved.id,
      saved.originalCredits,
      saved.originalMoney,
    );

    const newAccount = toDomain(saved);

    await this.eventPublisher.publish(
      new GiftAccountCreatedEvent({
        creditCode: newAccount.getCreditCode(),
        email: newAccount.getEmail(),
        type: newAccount.getTypeAsString(),
        originalCredits: newAccount.getOriginalCredits(),
        originalMoney: newAccount.getOriginalMoney(),
        expiresAt: newAccount.getExpirationDate(),
      }),
    );

    return toDTO(newAccount);
  }

  async createPrepaidAccount(
    treatmentCount: number,
    pricePerTreatment: number,
    email: string,
  ): Promise<CreditAccountDTO> {
    const account = createNewCreditAccount({
      type: CreditAccountTypeEnum.PREPAID_CARD,
      email,
      pricePerTreatment,
      treatmentCount,
    });

    const saved = await this.accountRepo.create(account.getDataToPersist());

    await this.transactionRepo.logPurchase(
      saved.id,
      saved.originalCredits,
      saved.originalMoney,
    );
    const newAccount = toDomain(saved) as PrepaidAccount;

    await this.eventPublisher.publish(
      new PrepaidAccountCreatedEvent({
        creditCode: newAccount.getCreditCode(),
        email: newAccount.getEmail(),
        type: newAccount.getTypeAsString(),
        originalCredits: newAccount.getOriginalCredits(),
        originalMoney: newAccount.getOriginalMoney(),
        treatmentCount: newAccount.getTreatmentCount(),
        expiresAt: newAccount.getExpirationDate(),
      }),
    );

    return toDTO(newAccount);
  }

  async activateAccount(creditCode: string): Promise<void> {
    const account = await this.accountRepo.findByCreditCode(creditCode);
    if (!account) throw new Error("Account not found");

    const domain = toDomain(account);
    domain.activate();
    await this.accountRepo.updateState(domain);
  }

  async useCredits(
    creditCode: string,
    cost: number,
    note?: string,
  ): Promise<CreditAccountDTO> {
    const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
    if (!dbAccount) throw new Error("Account not found");

    const account = toDomain(dbAccount);
    account.useCredits(cost);
    const updated = await this.accountRepo.updateState(account);

    await this.transactionRepo.logCreditUsed(
      updated.id,
      cost,
      cost,
      note ?? "",
    );

    return toDTO(toDomain(updated));
  }

  async refundCredits(
    creditCode: string,
    cost: number,
    note?: string,
  ): Promise<CreditAccountDTO> {
    const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
    if (!dbAccount) throw new Error("Account not found");

    const account = toDomain(dbAccount);
    account.refundCredits(cost);

    const updated = await this.accountRepo.updateState(account);

    await this.transactionRepo.logCreditRefund(
      updated.id,
      cost,
      cost,
      note ?? "",
    );

    return toDTO(toDomain(updated));
  }

  async transferCredits(
    fromCode: string,
    toCode: string,
    amount: number,
    note?: string,
  ): Promise<CreditTransferDTO> {
    const dbFromAccount = await this.accountRepo.findByCreditCode(fromCode);
    const dbToAccount = await this.accountRepo.findByCreditCode(toCode);
    if (!dbFromAccount || !dbToAccount) throw new Error("Account not found");

    const fromAccount = toDomain(dbFromAccount);
    const toAccount = toDomain(dbToAccount);

    if (fromAccount.type !== toAccount.type)
      throw new Error("Accounts are not of the same type");

    fromAccount.transferCreditsFromAccount(amount);
    toAccount.transferCreditsToAccount(amount);

    const updatedFromAccount = await this.accountRepo.updateState(fromAccount);
    const updatedToAccount = await this.accountRepo.updateState(toAccount);

    const fromTransaction = await this.transactionRepo.logCreditTransferOut(
      updatedFromAccount.id,
      amount,
      amount,
      note ?? "",
    );

    const toTransaction = await this.transactionRepo.logCreditTransferIn(
      updatedToAccount.id,
      amount,
      amount,
      note ?? "",
    );
    const transfer = await this.transferRepo.saveCreditTransfer(
      fromTransaction.id,
      toTransaction.id,
      amount,
    );

    return toTransferDTO(transfer);
  }

  async refundMoney(
    creditCode: string,
    money: number,
    note?: string,
  ): Promise<CreditAccountDTO> {
    const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
    if (!dbAccount) throw new Error("Account not found");

    const account = toDomain(dbAccount);
    account.refundMoneyOnly(money);

    const updated = await this.accountRepo.updateState(account);

    await this.transactionRepo.logMoneyRefund(updated.id, 0, money, note ?? "");

    return toDTO(toDomain(updated));
  }

  async nullifyAccount(
    creditCode: string,
    note?: string,
  ): Promise<CreditAccountDTO> {
    const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
    if (!dbAccount) throw new Error("Account not found");

    const account = toDomain(dbAccount);
    const removedCredits = account.availableCredits;
    const removedMoney = account.availableMoney;
    account.nullifyAccount();

    const updated = await this.accountRepo.updateState(account);

    await this.transactionRepo.logNullification(
      updated.id,
      removedCredits,
      removedMoney,
      note ?? "",
    );

    return toDTO(toDomain(updated));
  }

  async findByCode(creditCode: string): Promise<CreditAccountDTO> {
    const account = await this.accountRepo.findByCreditCode(creditCode);
    if (!account) throw new Error("Account not found");
    return toDTO(toDomain(account));
  }

  async findByEmail(email: string): Promise<CreditAccountDTO[]> {
    const accounts = await this.accountRepo.findByEmail(email);
    if (!accounts) throw new Error("Account not found");
    return accounts.map((a) => {
      const domain = toDomain(a);
      const dto = toDTO(domain);
      return {
        ...dto,
        treatmentCount: dto.treatmentCount ?? undefined,
      };
    });
  }

  async findAll(): Promise<CreditAccountDTO[]> {
    const accounts = await this.accountRepo.findAll();
    return accounts.map((a) => {
      const domain = toDomain(a);
      const dto = toDTO(domain);
      return {
        ...dto,
        treatmentCount: dto.treatmentCount ?? undefined,
      };
    });
  }

  async findTransactions(creditCode: string): Promise<TransactionDTO[]> {
    const account = await this.accountRepo.findByCreditCode(creditCode);
    if (!account) throw new Error("Account not found");
    const transactions = await this.transactionRepo.getTransactionsForAccount(
      account.id,
    );

    return transactions.map(toTransactionDTO);
  }
}

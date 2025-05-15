import type {
  CreditAccountDTO,
  CreditTransferDTO,
  TransactionDTO,
} from "../dto/creditaccount.types";

import {
  toDomain,
  toDTO,
  toTransferDTO,
} from "../../infrastructure/mappers/creditaccount.mapper";

import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper";

import { createNewCreditAccount } from "../../domain/CreditAccountFactory";
import { CreditAccountType } from "../../../../prisma/generated/client";
import type { CreditAccountRepository } from "../../infrastructure/repository/creditaccount.repository";
import type { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository";
import type { CreditTransferRepository } from "../../infrastructure/repository/creditTransfer.repository";
import type { DomainEventPublisher } from "../../domain/events/DomainEventPublisher";

export class CreditAccountService {
  constructor(
    private accountRepo: CreditAccountRepository,
    private transactionRepo: CreditTransactionRepository,
    private transferRepo: CreditTransferRepository,
    private eventPublisher: DomainEventPublisher
  ) {}

  async createGiftAccount(
    purchaseAmount: number,
    email: string
  ): Promise<CreditAccountDTO> {
    const account = createNewCreditAccount({
      type: CreditAccountType.GIFT_CARD,
      email,
      originalAmount: purchaseAmount,
    });

    const saved = await this.accountRepo.create(account.getDataToPersist());

    await this.transactionRepo.logPurchase(
      saved.id,
      saved.originalCredits,
      saved.originalMoney
    );

    return toDTO(toDomain(saved));
  }

  async createPrepaidAccount(
    treatmentCount: number,
    pricePerTreatment: number,
    email: string
  ): Promise<CreditAccountDTO> {
    const discount = treatmentCount === 5 ? 0.12 : 0.16;

    const account = createNewCreditAccount({
      type: CreditAccountType.PREPAID_CARD,
      email,
      pricePerTreatment,
      treatmentCount,
    });

    const saved = await this.accountRepo.create(account.getDataToPersist());

    await this.transactionRepo.logPurchase(
      saved.id,
      saved.originalCredits,
      saved.originalMoney
    );

    return toDTO(toDomain(saved));
  }

  async useCredits(
    creditCode: string,
    cost: number,
    note?: string
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
      note ?? ""
    );

    return toDTO(toDomain(updated));
  }

  async refundCredits(
    creditCode: string,
    cost: number,
    note?: string
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
      note ?? ""
    );

    return toDTO(toDomain(updated));
  }

  async transferCredits(
    fromCode: string,
    toCode: string,
    amount: number,
    note?: string
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
      note ?? ""
    );

    const toTransaction = await this.transactionRepo.logCreditTransferIn(
      updatedToAccount.id,
      amount,
      amount,
      note ?? ""
    );
    const transfer = await this.transferRepo.saveCreditTransfer(
      fromTransaction.id,
      toTransaction.id,
      amount
    );

    return toTransferDTO(transfer);
  }

  async refundMoney(
    creditCode: string,
    money: number,
    note?: string
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
    note?: string
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
      note ?? ""
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
      account.id
    );

    return transactions.map(toTransactionDTO);
  }
}

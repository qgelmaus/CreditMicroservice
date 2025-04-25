import { GiftAccount, PrepaidAccount } from "../../domain/CreditAccount";
import type {
  CreditAccountDTO,
  CreditTransferDTO,
  TransactionDTO,
} from "../dto/creditaccount.types";
import { Credits } from "../../domain/valueobjects/Credits";
import { Money } from "../../domain/valueobjects/Money";

import {
  toDomain,
  toDTO,
  toTransferDTO,
} from "../../infrastructure/mappers/creditaccount.mapper";

import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper";
import { CreditAccountRepository } from "../../infrastructure/repository/creditaccount.repository";
import { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository";
import { CreditTransferRepository } from "../../infrastructure/repository/creditTransfer.repository";

export class CreditAccountService {
  private accountRepo = new CreditAccountRepository();
  private transactionRepo = new CreditTransactionRepository();
  private transferRepo = new CreditTransferRepository();

  async createGiftAccount(purchaseAmount: number, email: string) {
    const now = new Date();
    const expiresAt = new Date();
    expiresAt.setFullYear(now.getFullYear() + 3);
    const credits = new Credits(purchaseAmount);
    const money = new Money(purchaseAmount);

    const account = new GiftAccount(
      0,
      this.generateCreditCode(),
      credits,
      money,
      credits,
      money,
      email,
      true,
      now,
      expiresAt
    );

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
    const fullPrice = treatmentCount * pricePerTreatment;
    const discountedPrice = fullPrice * (1 - discount);

    const credits = new Credits(fullPrice);
    const money = new Money(discountedPrice);

    const account = new PrepaidAccount(
      0,
      this.generateCreditCode(),
      credits,
      money,
      credits,
      money,
      email,
      true,
      new Date(),
      this.generateDateExpired(),
      treatmentCount,
      discount * 100
    );

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

    await this.transactionRepo.logMoneyRefund(
      updated.id,
      0,
      money,
      note ?? ""
    );

    return toDTO(toDomain(updated));
  }

  async nullifyAccount(creditCode: string, note?: string): Promise<CreditAccountDTO>{
    const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
    if(!dbAccount) throw new Error("Account not found");

    const account = toDomain(dbAccount)
    const removedCredits = account.availableCredits;
    const removedMoney = account.availableMoney;
    account.nullifyAccount();

    const updated = await this.accountRepo.updateState(account)
    console.log(updated)
    await this.transactionRepo.logNullification(
      updated.id,
      removedCredits,
      removedMoney,
      note ?? ""
      
    )

    return toDTO(toDomain(updated))
  }

  async findByCode(creditCode: string): Promise<CreditAccountDTO> {
    const account = await this.accountRepo.findByCreditCode(creditCode);
    if (!account) throw new Error("Account not found");
    return toDTO(toDomain(account));
  }

  async findAll(): Promise<CreditAccountDTO[]> {
    const accounts = await this.accountRepo.findAll();
    return accounts.map((a) => toDTO(toDomain(a)));
  }

  async findTransactions(creditCode: string): Promise<TransactionDTO[]> {
    const account = await this.accountRepo.findByCreditCode(creditCode);
    if (!account) throw new Error("Account not found");
    const transactions = await this.transactionRepo.getTransactionsForAccount(
      account.id
    );

    return transactions.map(toTransactionDTO);
  }

  private generateCreditCode(): string {
    const randomDigits = Math.floor(1000000 + Math.random() * 900000);
    return `RR${randomDigits}`;
  }

  private generateDateExpired(): Date {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 3);
    return now;
  }
}

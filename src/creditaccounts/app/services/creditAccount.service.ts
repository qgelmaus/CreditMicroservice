import { TransactionType } from "@prisma/client";
import type { CreditAccount } from "../../domain/CreditAccount";
import { CreditAccountDTO } from "../../domain/shared/types/creditaccount.types";
import { CreditAccountRepository } from "../../infrastructure/repository/creditaccount.repository";
import { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository";
import { empty } from "@prisma/client/runtime/library";

export class CreditAccountService {
  private accountRepo = new CreditAccountRepository();
  private transactionRepo = new CreditTransactionRepository();

  async create(account: CreditAccount) {
    const dto = account.getDataToPersist();

    const savedAccount = await this.accountRepo.create(dto);

    await this.transactionRepo.logPurchase(
      savedAccount.id,
      savedAccount.originalCredits,
      savedAccount.availableMoney
    );

    return savedAccount;
  }

  async findByCode(code: string) {
    return await this.accountRepo.findByCreditCode(code);
  }

  async findAll() {
    return await this.accountRepo.findAll();
  }

  async useCredits(
    creditCode: string,
    credits: number,
    money: number,
    note?: string
  ) {
    const account = await this.accountRepo.findByCreditCode(creditCode);
    if (!account) throw new Error("Account not found");

    if (account.availableCredits < credits) {
      throw new Error("Not enough credits available.");
    }

    const updated = await this.accountRepo.updateAvailableCredits(
      creditCode,
      account.availableCredits - credits,
      account.availableMoney - money
    );

    await this.transactionRepo.logCreditUsed(
      updated.id,
      credits,
      money,
      note ?? ""
    );

    return updated;
  }

  async refundToCreditAccount(
    creditCode: string,
    credits: number,
    money: number,
    note?: string
  ) {
    const account = await this.findByCode(creditCode);
    if (!account) throw new Error("Account not found");

    if (account.dateExpired < new Date()) {
      throw new Error("Account is expired");
    }

    const updated = await this.accountRepo.updateAvailableCredits(
      creditCode,
      account.availableCredits + credits,
      account.availableMoney + money
    );

    await this.transactionRepo.logCreditRefund(
      updated.id,
      credits,
      money,
      note ?? ""
    );

    return updated;
  }
}

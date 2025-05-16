import type { CreditTransaction } from "apps/credit-service/src/prisma/generated/client/index.js";
import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper.ts";
import type { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository.ts";

import type { TransactionDTO } from "../dto/creditaccount.types.ts";

export class CreditTransactionService {
  constructor(private transactionRepo: CreditTransactionRepository) {}

  async findAllTransactions(): Promise<TransactionDTO[]> {
    const transactions = await this.transactionRepo.findAll();
    return transactions.map((t: CreditTransaction) => toTransactionDTO(t));
  }
}

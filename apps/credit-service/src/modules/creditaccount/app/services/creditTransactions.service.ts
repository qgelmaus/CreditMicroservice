import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper";
import type { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository";

import type { TransactionDTO } from "../dto/creditaccount.types";

export class CreditTransactionService {
  constructor(private transactionRepo: CreditTransactionRepository) {}

  async findAllTransactions(): Promise<TransactionDTO[]> {
    const transactions = await this.transactionRepo.findAll();
    return transactions.map((t) => toTransactionDTO(t));
  }
}

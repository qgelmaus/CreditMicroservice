import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper";
import { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository";
import type { TransactionDTO } from "../dto/creditaccount.types";

export class CreditTransactionService {
	private transactionRepo = new CreditTransactionRepository();

	async findAllTransactions(): Promise<TransactionDTO[]> {
		const transactions = await this.transactionRepo.findAll();
		return transactions.map((t) => toTransactionDTO(t));
	}
}

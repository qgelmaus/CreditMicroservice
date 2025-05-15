import { toTransactionDTO } from "../../infrastructure/mappers/transaction.mapper";
export class CreditTransactionService {
    transactionRepo;
    constructor(transactionRepo) {
        this.transactionRepo = transactionRepo;
    }
    async findAllTransactions() {
        const transactions = await this.transactionRepo.findAll();
        return transactions.map((t) => toTransactionDTO(t));
    }
}

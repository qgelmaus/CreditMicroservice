import { CreditTransactionService } from "../../../services/creditTransactions.service";

const service = new CreditTransactionService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>

export const allCreditTransactions = async () => {
	return await service.findAllTransactions();
};

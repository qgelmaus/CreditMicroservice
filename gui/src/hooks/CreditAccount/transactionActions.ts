import { useQuery } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../../services/transactionService";

export function TransactionActions(refetch: () => void) {
	const [UseTransactionQuery] = useQuery(GET_ALL_TRANSACTIONS);

	const getTransactions = async () => {
		await UseTransactionQuery();
		await refetch();
	};

	return { getTransactions };
}

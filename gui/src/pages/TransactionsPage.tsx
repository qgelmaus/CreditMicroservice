import { useQuery } from "@apollo/client";

import { GET_ALL_TRANSACTIONS } from "../services/transactionService";
import { DynamicTable } from "../components/DynamicTable";
import { formatMoney } from "../utils/formatMoney";
import type { Transaction } from "../types/CreditAccount";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

export default function TransactionsPage() {
	const { data, loading, error } = useQuery(GET_ALL_TRANSACTIONS);
	const [searchTerm, setSearchTerm] = useState("");

	if (loading) return <p>Henter transaktioner...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data || !data.allCreditTransactions)
		return <p>Ingen transactioner fundet.</p>;

	const transactions = data.allCreditTransactions;

	const columns = [
		"Type",
		"Credits",
		"Money",

		"Date",
		"CreditCode",
		"BookingId",
		"Note",
	];

	const filteredTransactions = transactions.filter(
		(transaction: Transaction) => {
			const lowerSearch = searchTerm.toLowerCase();
			return (
				transaction.creditCode.toLowerCase().includes(lowerSearch) ||
				transaction.type.toLowerCase().includes(lowerSearch)
			);
		},
	);

	const totalCredits = filteredTransactions.reduce(
		(sum: number, t: Transaction) => sum + t.credits,
		0,
	);
	const totalMoney = filteredTransactions.reduce(
		(sum: number, t: Transaction) => sum + t.money,
		0,
	);

	const tableData = filteredTransactions.map((t: Transaction) => ({
		Type: t.type,
		Credits: t.credits,
		Money: formatMoney(t.money),
		Note: t.note || "-",
		Date: new Date(t.createdAt).toLocaleDateString(),
	}));

	return (
		<div>
			<SearchBar
				placeholder="Søg i transaktioner..."
				onSearch={(term) => setSearchTerm(term)}
			/>
			<h2 style={{ marginTop: "30px" }}>Transaktioner</h2>
			<div style={{ marginTop: "30px" }}>
				<p>Total Credits: {totalCredits}</p>
				<p>Total Money: {formatMoney(totalMoney)}</p>
			</div>
			<DynamicTable columns={columns} data={tableData} />
		</div>
	);
}

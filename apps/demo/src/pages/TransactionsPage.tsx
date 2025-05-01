import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ALL_TRANSACTIONS } from "../services/transactionService";
import { DynamicTable } from "../components/DynamicTable";
import { formatMoney } from "../utils/formatMoney";
import type { Transaction } from "../types/CreditAccount";
import { SearchBar } from "../components/SearchBar";

const calculateSumsByType = (transactions: Transaction[]) => {
	const sums: Record<string, number> = {};

	for (const t of transactions) {
		if (!sums[t.type]) {
			sums[t.type] = 0;
		}
		sums[t.type] += t.money;
	}

	return sums;
};

export default function TransactionsPage() {
	const { data, loading, error, refetch } = useQuery(GET_ALL_TRANSACTIONS);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (loading) return <p>Henter transaktioner...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data || !data.allCreditTransactions)
		return <p>Ingen transaktioner fundet.</p>;

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

	const moneySumsByType = calculateSumsByType(filteredTransactions);

	const tableData = filteredTransactions.map((t: Transaction) => ({
		Type: t.type,
		Credits: t.credits,
		Money: formatMoney(t.money),
		Date: new Date(t.createdAt).toLocaleDateString(),
		CreditCode: t.creditCode,
		BookingId: t.bookingId || "-",
		Note: t.note || "-",
	}));

	return (
		<div className="page-content-wrapper">
			<h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
				Transaktioner
			</h2>

			<SearchBar
				placeholder="Søg i transaktioner..."
				onSearch={(term) => setSearchTerm(term)}
			/>

			<div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
				<p>
					<strong>Total Credits:</strong> {totalCredits}
				</p>
				<p>
					<strong>Total Money:</strong> {formatMoney(totalMoney)}
				</p>

				<h4 style={{ marginTop: "1rem" }}>
					Summer fordelt på transaktionstype:
				</h4>
				<ul>
					{Object.entries(moneySumsByType).map(([type, sum]) => (
						<li key={type}>
							<strong>{type}:</strong> {formatMoney(sum)}
						</li>
					))}
				</ul>
			</div>

			<DynamicTable columns={columns} data={tableData} />
		</div>
	);
}

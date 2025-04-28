import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ACCOUNT_BY_CODE } from "../../services/accountService";
import { ButtonBar } from "../../components/ButtonBar";
import { Button } from "../../ui/Button";
import { DynamicTable } from "../../components/DynamicTable";

// src/pages/AccountPage.tsx
export default function AccountPage() {
	const { code } = useParams<{ code: string }>();

	const { data, loading, error } = useQuery(GET_ACCOUNT_BY_CODE, {
		variables: { code },
	});

	if (loading) return <p>Henter konto...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data || !data.creditAccountByCode) return <p>Ingen konto fundet.</p>;

	const account = data.creditAccountByCode;
	const transactions = account.transactions || [];

	const columns = ["Type", "Credits", "Money", "Note", "Date"];

	const tableData = transactions.map((transaction: any) => ({
		Type: transaction.type,
		Credits: transaction.credits,
		Money: transaction.money,
		Note: transaction.note || "-", // fallback hvis note er null
		Date: new Date(transaction.createdAt).toLocaleDateString(),
	}));

	return (
		<div>
			<h1>Konto: {account.creditCode}</h1>

			<ButtonBar>
				<Button>Brug Kreditter</Button>
				<Button>Refunder Penge</Button>
				<Button>Refunder Kreditter</Button>
			</ButtonBar>

			<h2>Transaktioner</h2>
			<DynamicTable columns={columns} data={tableData} />
		</div>
	);
}

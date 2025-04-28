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
	function formatMoney(amount: number) {
		return new Intl.NumberFormat("da-DK", {
			style: "currency",
			currency: "DKK",
		}).format(amount);
	}

	if (loading) return <p>Henter konto...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data || !data.creditAccountByCode) return <p>Ingen konto fundet.</p>;

	const account = data.creditAccountByCode;
	const transactions = account.transactions || [];

	const columns = ["Type", "Credits", "Money", "Note", "Date"];
	const tableData = transactions.map((transaction: any) => ({
		Type: transaction.type,
		Credits: transaction.credits,
		Money: formatMoney(transaction.money),
		Note: transaction.note || "-",
		Date: new Date(transaction.createdAt).toLocaleDateString(),
	}));

	return (
		<div>
			{/* Kontooversigt */}
			<div
				style={{
					border: "1px solid #ddd",
					borderRadius: "8px",
					padding: "16px",
					marginBottom: "20px",
					backgroundColor: "#f9f9f9",
				}}
			>
				<h2>Kontooversigt - {account.creditCode}</h2>
				<h2>{account.email}</h2>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "8px",
					}}
				>
					<div>
						<strong>Tilgængelige Kreditter:</strong> {account.availableCredits}
					</div>
					<div>
						<strong>Tilgængelige Penge:</strong>{" "}
						{formatMoney(account.availableMoney)}
					</div>
					<div>
						<strong>Oprindelige Kreditter:</strong> {account.originalCredits}
					</div>
					<div>
						<strong>Oprindelige Penge:</strong>{" "}
						{formatMoney(account.originalMoney)}
					</div>
					<div>
						<strong>Oprettet:</strong>{" "}
						{new Date(account.createdAt).toLocaleDateString()}
					</div>
					<div>
						<strong>Udløber:</strong>{" "}
						{new Date(account.expiresAt).toLocaleDateString()}
					</div>
				</div>
			</div>

			{/* Knapper */}
			<ButtonBar>
				<Button>Brug Kreditter</Button>
				<Button>Refunder Penge</Button>
				<Button>Refunder Kreditter</Button>
			</ButtonBar>

			{/* Transaktionstabel */}
			<h2>Transaktioner</h2>
			<DynamicTable columns={columns} data={tableData} />
		</div>
	);
}

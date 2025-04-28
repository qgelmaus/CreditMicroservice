import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
	GET_ACCOUNT_BY_CODE,
	NULLIFY_ACCOUNT,
	REFUND_CREDITS,
	REFUND_MONEY,
	USE_CREDITS,
} from "../../services/accountService";
import { ButtonBar } from "../../components/ButtonBar";
import { Button } from "../../ui/Button";
import { DynamicTable } from "../../components/DynamicTable";
import { useState } from "react";

// src/pages/AccountPage.tsx
export default function AccountPage() {
	const { code } = useParams<{ code: string }>();

	const { data, loading, error, refetch } = useQuery(GET_ACCOUNT_BY_CODE, {
		variables: { code },
	});

	function formatMoney(amount: number) {
		return new Intl.NumberFormat("da-DK", {
			style: "currency",
			currency: "DKK",
		}).format(amount);
	}

	const [useCreditsMutation] = useMutation(USE_CREDITS);
	const [useRefundCreditsMutaiton] = useMutation(REFUND_CREDITS);
	const [useRefundMoneyMutation] = useMutation(REFUND_MONEY);
	const [useNullifyAccountMutation] = useMutation(NULLIFY_ACCOUNT);

	const [useCreditsAmount, setUseCreditsAmount] = useState<number>(0);
	const [refundCreditsAmount, setRefundCreditsAmount] = useState<number>(0);
	const [refundMoneyAmount, setRefundMoneyAmount] = useState<number>(0);
	const [useCreditsNote, setUseCreditsNote] = useState<string>("");
	const [refundCreditsNote, setRefundCreditsNote] = useState<string>("");
	const [refundMoneyNote, setRefundMoneyNote] = useState<string>("");
	const [nullifyNote, setNullifyNote] = useState<string>("");

	const handleUseCredits = async () => {
		if (!code) return;
		console.log("Sender", code, useCreditsAmount);
		const result = await useCreditsMutation({
			variables: {
				input: {
					creditCode: code,
					cost: useCreditsAmount,
					note: useCreditsNote ?? "",
				},
			},
		});
		refetch();
	};

	const handleRefundCredits = async () => {
		if (!code) return;
		const result = await useRefundCreditsMutaiton({
			variables: {
				input: {
					creditCode: code,
					cost: refundCreditsAmount,
					note: refundCreditsNote,
				},
			},
		});
		refetch();
	};

	const handleRefundMoney = async () => {
		if (!code) return;

		const result = await useRefundMoneyMutation({
			variables: {
				input: {
					creditCode: code,
					money: refundMoneyAmount,
					note: refundMoneyNote,
				},
			},
		});
		refetch();
	};

	const handleNullify = async () => {
		if (!code) return;
		const result = await useNullifyAccountMutation({
			variables: {
				input: {
					creditCode: code,
					note: nullifyNote,
				},
			},
		});
		refetch();
	};

	if (loading) return <p>Henter konto...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data || !data.creditAccountByCode) return <p>Ingen konto fundet.</p>;

	const account = data.creditAccountByCode;
	const transactions = account.transactions || [];
	const { isActive, expiresAt } = account;
	const isExpired = expiresAt < new Date();
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
				<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
					<input
						type="number"
						value={useCreditsAmount}
						onChange={(e) => setUseCreditsAmount(Number(e.target.value))}
						placeholder="Antal kreditter"
					/>
					<input
						type="text"
						value={useCreditsNote}
						onChange={(e) => setUseCreditsNote(e.target.value)}
						placeholder="Note"
					/>
					<Button disabled={!isActive} onClick={handleUseCredits}>
						Brug Kreditter
					</Button>
				</div>

				<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
					<input
						type="number"
						value={refundMoneyAmount}
						onChange={(e) => setRefundMoneyAmount(Number(e.target.value))}
						placeholder="Beløb i DKK"
					/>
					<input
						type="text"
						value={refundMoneyNote}
						onChange={(e) => setRefundMoneyNote(e.target.value)}
						placeholder="Note"
					/>
					<Button onClick={handleRefundMoney}>Refunder Penge</Button>
				</div>

				<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
					<input
						type="number"
						value={refundCreditsAmount}
						onChange={(e) => setRefundCreditsAmount(Number(e.target.value))}
						placeholder="Antal kreditter"
					/>
					<input
						type="text"
						value={refundCreditsNote}
						onChange={(e) => setRefundCreditsNote(e.target.value)}
						placeholder="Note"
					/>
					<Button onClick={handleRefundCredits}>Refunder Kreditter</Button>
				</div>
				<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
					<input
						type="text"
						value={nullifyNote}
						onChange={(e) => setNullifyNote(e.target.value)}
						placeholder="Note"
					/>
					<Button onClick={handleNullify}>Nulstil</Button>
				</div>
			</ButtonBar>

			{/* Transaktionstabel */}
			<h2>Transaktioner</h2>
			<DynamicTable columns={columns} data={tableData} />
		</div>
	);
}

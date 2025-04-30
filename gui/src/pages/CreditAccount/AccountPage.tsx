import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ACCOUNT_BY_CODE } from "../../services/accountService";
import { DynamicTable } from "../../components/DynamicTable";

import { useState } from "react";
import { Button } from "../../ui/Button";
import { NumberInput } from "../../ui/NumberInput";
import { TextInput } from "../../ui/TextInput";

import { AccountOverview } from "../../components/CreditAccount/AccountOverview";
import { EditCreditActions } from "../../hooks/CreditAccount/editCreditActions";
import { formatMoney } from "../../utils/formatMoney";
import type { Transaction } from "../../types/CreditAccount";

export default function AccountPage() {
	const { code } = useParams<{ code: string }>();
	const { data, loading, error, refetch } = useQuery(GET_ACCOUNT_BY_CODE, {
		variables: { code },
	});
	const { useCredits, refundCredits, refundMoney, nullifyAccount } =
		EditCreditActions(refetch);

	const [formData, setFormData] = useState<Record<string, any>>({
		useCreditsAmount: 0,
		useCreditsNote: "",
		refundCreditsAmount: 0,
		refundCreditsNote: "",
		refundMoneyAmount: 0,
		refundMoneyNote: "",
		nullifyNote: "",
	});

	const resetForm = () => {
		setFormData({
			useCreditsAmount: 0,
			useCreditsNote: "",
			refundCreditsAmount: 0,
			refundCreditsNote: "",
			refundMoneyAmount: 0,
			refundMoneyNote: "",
			nullifyNote: "",
		});
	};

	const handleFormChange = (fieldName: string, value: any) => {
		setFormData((prev) => ({
			...prev,
			[fieldName]: value,
		}));
	};

	const handleUseCredits = async () => {
		if (!code) return;
		await useCredits(code, formData.useCreditsAmount, formData.useCreditsNote);
		resetForm();
	};

	const handleRefundCredits = async () => {
		if (!code) return;
		await refundCredits(
			code,
			formData.refundCreditsAmount,
			formData.refundCreditsNote,
		);
		resetForm();
	};

	const handleRefundMoney = async () => {
		if (!code) return;
		await refundMoney(
			code,
			formData.refundMoneyAmount,
			formData.refundMoneyNote,
		);
		resetForm();
	};

	const handleNullify = async () => {
		if (!code) return;
		await nullifyAccount(code, formData.nullifyNote);
		resetForm();
	};

	if (loading) return <p>Henter konto...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data || !data.creditAccountByCode) return <p>Ingen konto fundet.</p>;

	const account = data.creditAccountByCode;
	const transactions = account.transactions || [];

	const columns = ["Type", "Credits", "Money", "Note", "Date"];
	const tableData = transactions.map((t: Transaction) => ({
		Type: t.type,
		Credits: t.credits,
		Money: formatMoney(t.money),
		Note: t.note || "-",
		Date: new Date(t.createdAt).toLocaleDateString(),
	}));

	return (
		<div>
			<AccountOverview account={account} formatMoney={formatMoney} />

			<div
				style={{
					maxWidth: "600px",
					width: "100%",
					margin: "0 auto",
				}}
			>
				{/* Brug kreditter */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "12px",
					}}
				>
					<Button disabled={!account.isActive} onClick={handleUseCredits}>
						Brug Kreditter
					</Button>
					<NumberInput
						value={formData.useCreditsAmount}
						placeholder="Antal kreditter"
						onChange={(value) => handleFormChange("useCreditsAmount", value)}
					/>
					<TextInput
						value={formData.useCreditsNote}
						placeholder="Note"
						onChange={(value) => handleFormChange("useCreditsNote", value)}
					/>
				</div>

				{/* Refunder kreditter */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "12px",
					}}
				>
					<Button onClick={handleRefundCredits}>Refunder Kreditter</Button>
					<NumberInput
						value={formData.refundCreditsAmount}
						placeholder="Antal kreditter (refunder)"
						onChange={(value) => handleFormChange("refundCreditsAmount", value)}
					/>

					<TextInput
						value={formData.refundCreditsNote}
						placeholder="Note (refunder kreditter)"
						onChange={(value) => handleFormChange("refundCreditsNote", value)}
					/>
				</div>

				{/* Refunder penge */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "12px",
					}}
				>
					<Button onClick={handleRefundMoney}>Refunder Penge</Button>
					<NumberInput
						value={formData.refundMoneyAmount}
						placeholder="Beløb i DKK (refunder)"
						onChange={(value) => handleFormChange("refundMoneyAmount", value)}
					/>

					<TextInput
						value={formData.refundMoneyNote}
						placeholder="Note (refunder penge)"
						onChange={(value) => handleFormChange("refundMoneyNote", value)}
					/>
				</div>

				{/* Nulstil konto */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "12px",
					}}
				>
					<Button onClick={handleNullify}>Nulstil Konto</Button>
					<TextInput
						value={formData.nullifyNote}
						placeholder="Note (nulstil konto)"
						onChange={(value) => handleFormChange("nullifyNote", value)}
					/>
				</div>
			</div>

			<h2 style={{ marginTop: "30px" }}>Transaktioner</h2>
			<DynamicTable columns={columns} data={tableData} />
		</div>
	);
}

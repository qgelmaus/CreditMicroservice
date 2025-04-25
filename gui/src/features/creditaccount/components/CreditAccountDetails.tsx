import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useCreditAccountByCode } from "../hooks/useCreditAccountByCode";
import type { Transaction } from "../hooks/useCreditAccountByCode";

interface Props {
	code: string;
}

const REFUND_CREDITS = gql`
	mutation RefundCredits($input: RefundCreditsInput!) {
		refundCredits(input: $input) {
			creditCode
			availableCredits
		}
	}
`;

const TRANSFER_CREDITS = gql`
	mutation TransferCredits($input: TransferCreditsInput!) {
		transferCredits(input: $input) {
			fromTransactionId
			toTransactionId
			amount
			createdAt
		}
	}
`;

export default function CreditAccountDetails({ code }: Props) {
	const { data, loading, error, refetch } = useCreditAccountByCode(code);
	const [refundAmount, setRefundAmount] = useState(0);
	const [transferAmount, setTransferAmount] = useState(0);
	const [transferToCode, setTransferToCode] = useState("");

	const [refundCredits] = useMutation(REFUND_CREDITS);
	const [transferCredits] = useMutation(TRANSFER_CREDITS);

	if (loading) return <p>Henter data...</p>;
	if (error) return <p style={{ color: "red" }}>Fejl: {error.message}</p>;
	if (!data?.creditAccountByCode)
		return <p>Ingen konto fundet med koden "{code}".</p>;

	const account = data.creditAccountByCode;

	const handleRefund = async () => {
		try {
			await refundCredits({
				variables: {
					input: {
						creditCode: code,
						cost: refundAmount,
						note: "Manuel refundering",
					},
				},
			});
			await refetch?.();
			setRefundAmount(0);
		} catch (err) {
			alert("Fejl ved refundering.");
			console.error(err);
		}
	};

	const handleTransfer = async () => {
		try {
			await transferCredits({
				variables: {
					input: {
						fromCreditCode: code,
						toCreditCode: transferToCode,
						amount: transferAmount,
						note: "Manuel overførsel",
					},
				},
			});
			await refetch?.();
			setTransferAmount(0);
			setTransferToCode("");
		} catch (err) {
			alert("Fejl ved overførsel.");
			console.error(err);
		}
	};

	return (
		<div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
			<h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
				Konto: {account.creditCode} - {account.__typename}
			</h2>
			<p>Tilgængelige credits: {account.availableCredits}</p>
			<p>Oprindelig beløb: {account.originalMoney}</p>

			<h3 style={{ marginTop: "1rem", fontWeight: "bold" }}>Transaktioner:</h3>
			<ul>
				{account.transactions.map((tx: Transaction) => (
					<li key={tx.id}>
						[{tx.type}] {tx.credits} credits / {tx.money} kr. –{" "}
						{new Date(tx.createdAt).toLocaleString()}
					</li>
				))}
			</ul>

			<hr style={{ margin: "1rem 0" }} />

			<h3>Refundér credits</h3>
			<input
				type="number"
				min="1"
				value={refundAmount}
				onChange={(e) => setRefundAmount(Number(e.target.value))}
				placeholder="Antal credits"
			/>
			<button onClick={handleRefund} style={{ marginLeft: "0.5rem" }}>
				Refundér
			</button>

			<h3 style={{ marginTop: "1rem" }}>Overfør credits</h3>
			<input
				type="text"
				placeholder="Til konto (creditCode)"
				value={transferToCode}
				onChange={(e) => setTransferToCode(e.target.value)}
			/>
			<input
				type="number"
				min="1"
				value={transferAmount}
				onChange={(e) => setTransferAmount(Number(e.target.value))}
				placeholder="Antal credits"
				style={{ marginLeft: "0.5rem" }}
			/>
			<button onClick={handleTransfer} style={{ marginLeft: "0.5rem" }}>
				Overfør
			</button>
		</div>
	);
}

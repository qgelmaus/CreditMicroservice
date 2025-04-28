import { useState } from "react";
import { ButtonBar } from "../ButtonBar";
import { Button } from "../../ui/Button";

interface AccountActionsProps {
	code: string;
	isActive: boolean;
	useCredits: (
		creditCode: string,
		cost: number,
		note?: string,
	) => Promise<void>;
	refundCredits: (
		creditCode: string,
		cost: number,
		note?: string,
	) => Promise<void>;
	refundMoney: (
		creditCode: string,
		money: number,
		note?: string,
	) => Promise<void>;
	nullifyAccount: (creditCode: string, note?: string) => Promise<void>;
}

export function AccountActions({
	code,
	isActive,
	useCredits,
	refundCredits,
	refundMoney,
	nullifyAccount,
}: AccountActionsProps) {
	const [useCreditsAmount, setUseCreditsAmount] = useState<number>(0);
	const [refundCreditsAmount, setRefundCreditsAmount] = useState<number>(0);
	const [refundMoneyAmount, setRefundMoneyAmount] = useState<number>(0);
	const [useCreditsNote, setUseCreditsNote] = useState<string>("");
	const [refundCreditsNote, setRefundCreditsNote] = useState<string>("");
	const [refundMoneyNote, setRefundMoneyNote] = useState<string>("");
	const [nullifyNote, setNullifyNote] = useState<string>("");

	const handleUseCredits = async () => {
		await useCredits(code, useCreditsAmount, useCreditsNote);
	};

	const handleRefundCredits = async () => {
		await refundCredits(code, refundCreditsAmount, refundCreditsNote);
	};

	const handleRefundMoney = async () => {
		await refundMoney(code, refundMoneyAmount, refundMoneyNote);
	};

	const handleNullify = async () => {
		await nullifyAccount(code, nullifyNote);
	};

	return (
		<ButtonBar>
			{/* Brug kreditter */}
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

			{/* Refunder penge */}
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

			{/* Refunder kreditter */}
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

			{/* Nulstil konto */}
			<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
				<input
					type="text"
					value={nullifyNote}
					onChange={(e) => setNullifyNote(e.target.value)}
					placeholder="Note"
				/>
				<Button onClick={handleNullify}>Nulstil Konto</Button>
			</div>
		</ButtonBar>
	);
}

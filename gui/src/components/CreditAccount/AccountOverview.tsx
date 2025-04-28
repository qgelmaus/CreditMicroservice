interface AccountOverviewProps {
	account: any; // Kan evt. types med din CreditAccount-type
	formatMoney: (amount: number) => string;
}

export function AccountOverview({
	account,
	formatMoney,
}: AccountOverviewProps) {
	return (
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
	);
}

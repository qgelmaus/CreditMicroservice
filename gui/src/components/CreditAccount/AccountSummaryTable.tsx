import React from "react";
import type { CreditAccount } from "../../types/CreditAccount";

type Props = {
	account: CreditAccount;
};

export const AccountSummaryTable = ({ account }: Props) => {
	return (
		<table
			style={{
				margin: "0.25rem auto",
				borderCollapse: "collapse",
				width: "100%",
				maxWidth: "500px",
				fontSize: "1rem",
			}}
		>
			<tbody>
				<tr>
					<td
						style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
					>
						Kode:
					</td>
					<td style={{ padding: "0.5rem", textAlign: "right" }}>
						{account.creditCode}
					</td>
				</tr>
				<tr>
					<td
						style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
					>
						Email:
					</td>
					<td style={{ padding: "0.5rem", textAlign: "right" }}>
						{account.email}
					</td>
				</tr>
				<tr>
					<td
						style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
					>
						Tilgængelige kreditter:
					</td>
					<td style={{ padding: "0.5rem", textAlign: "right" }}>
						{account.originalCredits}
					</td>
				</tr>
				<tr>
					<td
						style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
					>
						Pris:
					</td>
					<td style={{ padding: "0.5rem", textAlign: "right" }}>
						{account.originalMoney} DKK
					</td>
				</tr>
				<tr>
					<td
						style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
					>
						Udløbsdato:
					</td>
					<td style={{ padding: "0.5rem", textAlign: "right" }}>
						{account.expiresAt
							? new Date(account.expiresAt).toLocaleDateString()
							: "Ukendt"}
					</td>
				</tr>
				<tr>
					<td
						style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
					>
						Status:
					</td>
					<td style={{ padding: "0.5rem", textAlign: "right" }}>
						{account.isActive ? "Aktiv" : "Ikke aktiv"}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

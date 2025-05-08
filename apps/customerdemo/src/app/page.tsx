"use client";

import { useRouter } from "next/navigation";
import Button from "./components/button/Button";
import { useState } from "react";

export default function Home() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [transactions, setTransactions] = useState<any[]>([]); // typisk array af { id, type, amount, date }

	async function fetchGraphQLTransactions(email: string): Promise<any[]> {
		const response = await fetch("http://localhost:4000/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Authorization: "Bearer ...", // hvis nødvendigt
			},
			body: JSON.stringify({
				query: `
        query GetCreditAccountTransactions($email: String!) {
          creditAccountByEmail(email: $email) {
            transactions{
    				id
    				type
    				money
					credits
					createdAt
  				}
          }
        }
      `,
				variables: { email: email },
			}),
		});

		const json = await response.json();

		if (json.errors) {
			console.error(json.errors);
			alert("Fejl ved hentning af transaktioner");
			return [];
		}

		const accounts = json.data.creditAccountByEmail ?? [];
		return accounts.flatMap((account: any) => account.transactions ?? []);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[60vh] p-6">
			{/* Venstre side */}
			<div className="flex flex-col items-center justify-start w-full">
				<form className="flex gap-4 mb-4">
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Indtast din email.."
						className="px-4 py-2 border border-bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-warmgreen"
					/>
					<Button
						onClick={async (e) => {
							e.preventDefault();
							const data = await fetchGraphQLTransactions(email);
							setTransactions(data);
						}}
					>
						Søg
					</Button>
				</form>

				{transactions.length > 0 && (
					<table className="w-full text-sm border border-gray-600 ">
						<thead className="bg-gray-100 ">
							<tr>
								<th className="border px-4 py-2 text-left">DKK</th>
								<th className="border px-4 py-2 text-left">Kreditter</th>
								<th className="border px-4 py-2 text-left">Type</th>
								<th className="border px-4 py-2 text-right">Dato</th>
							</tr>
						</thead>
						<tbody>
							{transactions.map((tx) => (
								<tr key={tx.id} className="odd:bg-white even:bg-gray-50">
									<td className="border px-4 py-2">{tx.money}</td>
									<td className="border px-4 py-2">{tx.credits}</td>
									<td className="border px-4 py-2">{tx.type}</td>
									<td className="border px-4 py-2 text-right">
										{tx.createdAt}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>

			{/* Højre side */}
			<div className="flex items-start justify-center">
				<Button type="button" onClick={() => router.push("/flow")}>
					Ny Kreditbeholdning
				</Button>
			</div>
		</div>
	);
}

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBar } from "../../components/ButtonBar";
import { SearchBar } from "../../components/SearchBar";

import { useSelectCreditAccountType } from "../../services/flow/useSelectedCreditAccountType";
import type { CreditAccount } from "../../types/CreditAccount";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { GET_ALL_ACCOUNTS } from "../../services/accountService";

export default function AdminPage() {
	const { data, loading, error } = useQuery(GET_ALL_ACCOUNTS);
	const [searchTerm, setSearchTerm] = useState("");

	const { selectType } = useSelectCreditAccountType();

	const navigate = useNavigate();

	const handleGiftCardClick = async () => {
		try {
			const success = await selectType("GIFT_CARD");
			console.log(success);
			if (success) navigate("/giftcard/create");
		} catch (error) {
			console.error("Fejl ved valg af type:", error);
		}
	};

	const handlePrepaidCardClick = async () => {
		try {
			const success = await selectType("PREPAID_CARD");
			console.log(success);
			if (success) navigate("/prepaidcard/create");
		} catch (error) {
			console.error("Fejl ved valg af type:", error);
		}
	};

	if (loading) return <p>Henter konti...</p>;
	if (error) return <p>Fejl: {error.message}</p>;
	if (!data) return null;

	const filteredAccounts = data.allCreditAccounts.filter(
		(account: CreditAccount) => {
			const lowerSearch = searchTerm.toLowerCase();
			return (
				account.creditCode.toLowerCase().includes(lowerSearch) ||
				account.email.toLowerCase().includes(lowerSearch)
			);
		},
	);
	return (
		<div>
			<div>
				<ButtonBar>
					<Button onClick={handleGiftCardClick}>Opret Gavekort</Button>

					<Button onClick={handlePrepaidCardClick}>Opret Klippekort</Button>
				</ButtonBar>

				<SearchBar
					placeholder="Søg efter konti..."
					onSearch={(term) => setSearchTerm(term)}
				/>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "1.5rem",
					marginTop: "2rem",
					maxWidth: "1200px",
					marginLeft: "auto",
					marginRight: "auto",
					padding: "0 1rem",
				}}
			>
				{filteredAccounts.map((account: CreditAccount) => (
					<Card
						key={account.creditCode}
						link={`/account/${account.creditCode}`}
					>
						<h3>
							{account.creditCode} ({account.type})
						</h3>
						<p>Email: {account.email}</p>
						<p>Kreditter: {account.availableCredits}</p>
						<p>Penge: {account.availableMoney} DKK</p>
					</Card>
				))}
			</div>
		</div>
	);
}

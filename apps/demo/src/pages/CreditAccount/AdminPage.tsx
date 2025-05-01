import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBar } from "../../components/ButtonBar";
import { SearchBar } from "../../components/SearchBar";
import { GET_ALL_ACCOUNTS } from "../../services/accountService";
import type { CreditAccount } from "../../types/CreditAccount";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { AccountSummaryTable } from "../../components/CreditAccount/AccountSummaryTable";

export default function AdminPage() {
	const { data, loading, error } = useQuery(GET_ALL_ACCOUNTS);
	const [searchTerm, setSearchTerm] = useState("");

	const navigate = useNavigate();

	const handleGiftCardClick = () => {
		navigate("/admin/create");
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
		<div className="page-content-wrapper">
			<ButtonBar>
				<Button onClick={handleGiftCardClick}>Opret ny konto</Button>
			</ButtonBar>

			<SearchBar
				placeholder="Søg efter konti..."
				onSearch={(term) => setSearchTerm(term)}
			/>

			<div className="card-grid">
				{filteredAccounts.map((account: CreditAccount) => (
					<Card
						key={account.creditCode}
						link={`/account/${account.creditCode}`}
						style={{ width: "100%" }}
					>
						<h3>
							{account.creditCode} ({account.type})
						</h3>
						<AccountSummaryTable account={account} />
					</Card>
				))}
			</div>
		</div>
	);
}

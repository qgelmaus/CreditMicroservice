//CreditHomePage.tsx
import { Card } from "../../ui/Card";
import { GET_ALL_ACCOUNTS } from "../../services/accountService";
import type { CreditAccount } from "../../types/CreditAccount";
import { useQuery } from "@apollo/client";
import { ButtonBar } from "../../components/ButtonBar";
import { Button } from "../../ui/Button";
import { SearchBar } from "../../components/SearchBar";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectCreditAccountType } from "../../services/flow/useSelectedCreditAccountType";
import { useCancelFlow } from "../../services/flow/useCancelFlow";

export default function CreditHomePage() {
	const [searchTerm, setSearchTerm] = useState("");
	const { data, loading, error } = useQuery<{
		allCreditAccounts: CreditAccount[];
	}>(GET_ALL_ACCOUNTS, { fetchPolicy: "network-only" });
	const { selectType } = useSelectCreditAccountType();
	const { cancelFlow } = useCancelFlow();

	const navigate = useNavigate();

	const location = useLocation();
	const initialPath = useRef(location.pathname);

	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			cancelFlow();
			event.preventDefault();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [cancelFlow]);

	useEffect(() => {
		const initialPath = location.pathname;

		return () => {
			if (location.pathname !== initialPath) {
				cancelFlow();
			}
		};
	}, [cancelFlow, location.pathname]);

	useEffect(() => {
		if (location.pathname !== initialPath.current) {
			console.log("Navigating away, cancelling flow...");
			cancelFlow();
		}
	}, [location.pathname, cancelFlow]);

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

	const filteredAccounts = data.allCreditAccounts.filter((account) => {
		const lowerSearch = searchTerm.toLowerCase();
		return (
			account.creditCode.toLowerCase().includes(lowerSearch) ||
			account.email.toLowerCase().includes(lowerSearch)
		);
	});
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

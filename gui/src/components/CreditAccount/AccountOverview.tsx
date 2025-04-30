import { ContentWindow } from "../ContentWindow";

import type { CreditAccount } from "../../types/CreditAccount";
import { FullAccountSummaryTable } from "./FullAccountSummeryTable";

interface AccountOverviewProps {
	account: CreditAccount;
	formatMoney: (amount: number) => string;
}

export function AccountOverview({ account }: AccountOverviewProps) {
	const title = `Kontooversigt - ${account.creditCode}`;

	return (
		<ContentWindow title={title}>
			<h2 style={{ textAlign: "center" }}>{account.email}</h2>
			<FullAccountSummaryTable account={account} />
		</ContentWindow>
	);
}

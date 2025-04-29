import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreditHomePage from "./pages/CreditAccount/CreditHomePage";
import AccountPage from "./pages/CreditAccount/AccountPage";
import { GiftCardFlowManager } from "./pages/CreditAccount/flows/GiftCardFlow/GiftCardFlowManager";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrepaidCardFlowManager } from "./pages/CreditAccount/flows/PrepaidCardFlow/PrepaidCardFlowManager";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/account" element={<CreditHomePage />} />
					<Route path="/account/:code" element={<AccountPage />} />
					<Route path="/giftcard/create" element={<GiftCardFlowManager />} />
					<Route path="/transactions" element={<TransactionsPage />} />
					<Route
						path="/prepaidcard/create"
						element={<PrepaidCardFlowManager />}
					/>
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
export default App;

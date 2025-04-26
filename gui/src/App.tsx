// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreditHomePage from "./pages/CreditAccount/CreditHomePage";
import AccountPage from "./pages/CreditAccount/AccountPage";

import { GiftCardFlowManager } from "./pages/CreditAccount/flows/GiftCardFlow/GiftCardFlowManager";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/account/:creditCode" element={<AccountPage />} />
					<Route path="/account" element={<CreditHomePage />} />
					<Route path="/createGiftCard" element={<GiftCardFlowManager />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";

import AccountPage from "./pages/CreditAccount/AccountPage";
import { GiftCardFlowManager } from "./pages/CreditAccount/flows/GiftCardFlow/GiftCardFlowManager";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrepaidCardFlowManager } from "./pages/CreditAccount/flows/PrepaidCardFlow/PrepaidCardFlowManager";
import TransactionsPage from "./pages/TransactionsPage";
import CustomerPage from "./pages/CreditAccount/CustomerPage";
import AdminPage from "./pages/CreditAccount/AdminPage";
import AdminCardCreationPage from "./pages/CreditAccount/AdminCardCreationPage";
import { AdminSuccessPage } from "./pages/CreditAccount/AdminSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/account/:code" element={<AccountPage />} />
          <Route path="/giftcard/create" element={<GiftCardFlowManager />} />
          <Route path="/admin/create" element={<AdminCardCreationPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/admin/create/success" element={<AdminSuccessPage />} />
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

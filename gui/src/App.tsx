import AccountPage from "./pages/AccountPage";
import LandingPage from "./pages/LandingPage";
import GiftAccountForm from "./features/creditaccount/components/GiftAccountForm";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account/:code" element={<AccountPage />} />
      <Route path="/giftaccount" element={<GiftAccountForm />} />
      <Route path="*" element={<p>404 - Not Found</p>} />
    </Routes>
  );
}

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import type { CreditAccount } from "../../types/CreditAccount";
import { AccountSummaryTable } from "../../components/CreditAccount/AccountSummaryTable";

export const AdminSuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const account = state?.account as CreditAccount | undefined;

  useEffect(() => {
    if (!account) {
      navigate("/admin/create", { replace: true });
    }
  }, [account, navigate]);

  if (!account) return null;

  const message =
    account.type === "GIFT_CARD"
      ? "Dit gavekort er blevet oprettet."
      : account.type === "PREPAID_CARD"
        ? "Dit klippekort er blevet oprettet."
        : "Kontoen er blevet oprettet.";

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h2>✅ Succes!</h2>
      <p>{message}</p>

      <AccountSummaryTable account={account} />
    </div>
  );
};

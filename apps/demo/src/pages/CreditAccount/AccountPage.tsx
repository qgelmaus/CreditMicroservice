import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { GET_ACCOUNT_BY_CODE } from "../../services/accountService";
import { DynamicTable } from "../../components/DynamicTable";
import { AccountOverview } from "../../components/CreditAccount/AccountOverview";
import { AccountActions } from "../../components/CreditAccount/AccountActions"; // ← brug korrekt path
import { EditCreditActions } from "../../hooks/CreditAccount/editCreditActions";
import { formatMoney } from "../../utils/formatMoney";
import type { Transaction } from "../../types/CreditAccount";

export default function AccountPage() {
  const { code } = useParams<{ code: string }>();
  const { data, loading, error, refetch } = useQuery(GET_ACCOUNT_BY_CODE, {
    variables: { code },
  });
  const {
    executeUseCredits,
    refundCredits,
    refundMoney,
    nullifyAccount,
    transferCredits,
  } = EditCreditActions(refetch);

  if (loading) return <p>Henter konto...</p>;
  if (error) return <p>Fejl: {error.message}</p>;
  if (!data || !data.creditAccountByCode) return <p>Ingen konto fundet.</p>;

  const account = data.creditAccountByCode;
  const transactions = account.transactions || [];

  const columns = ["Type", "Credits", "Money", "Note", "Date"];
  const tableData = transactions.map((t: Transaction) => ({
    Type: t.type,
    Credits: t.credits,
    Money: formatMoney(t.money),
    Note: t.note || "-",
    Date: new Date(t.createdAt).toLocaleDateString(),
  }));

  return (
    <div>
      <AccountOverview account={account} formatMoney={formatMoney} />

      <div
        style={{
          maxWidth: "700px",
          margin: "2rem auto",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Kontohandlinger
        </h3>
        <AccountActions
          code={code!}
          isActive={account.isActive}
          useCredits={executeUseCredits}
          refundCredits={refundCredits}
          refundMoney={refundMoney}
          nullifyAccount={nullifyAccount}
          transferCredits={transferCredits}
        />
      </div>

      <h2 style={{ marginTop: "30px" }}>Transaktioner</h2>
      <DynamicTable columns={columns} data={tableData} />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import type { CreditAccount } from "../../types/CreditAccount";
import { useQuery } from "@apollo/client";
import { GET_ALL_ACCOUNTS } from "../../services/accountService";
import { useSelectCreditAccountType } from "../../services/flow/useSelectedCreditAccountType";
import { useCancelFlow } from "../../services/flow/useCancelFlow";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonBar } from "../../components/ButtonBar";
import { Button } from "../../ui/Button";
import { SimpleDynamicForm } from "../../components/SimpleDynamicForm";
import { Card } from "../../ui/Card";
import { AccountSummaryTable } from "../../components/CreditAccount/AccountSummaryTable";

export default function CustomerPage() {
  const [email, setEmail] = useState("");
  const [accounts, setAccounts] = useState<CreditAccount[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const { data, loading, error } = useQuery<{
    allCreditAccounts: CreditAccount[];
  }>(GET_ALL_ACCOUNTS, { fetchPolicy: "network-only" });

  const { selectType } = useSelectCreditAccountType();
  const { cancelFlow } = useCancelFlow();
  const navigate = useNavigate();
  const location = useLocation();
  const initialPath = useRef(location.pathname);

  // Afslut flow hvis side skiftes eller vindue lukkes
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      cancelFlow();
      event.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [cancelFlow]);

  useEffect(() => {
    if (location.pathname !== initialPath.current) {
      cancelFlow();
    }
  }, [location.pathname, cancelFlow]);

  const handleGiftCardClick = async () => {
    const success = await selectType("GIFT_CARD");
    if (success) navigate("/giftcard/create");
  };

  const handlePrepaidCardClick = async () => {
    const success = await selectType("PREPAID_CARD");
    if (success) navigate("/prepaidcard/create");
  };

  const handleSearchByEmail = () => {
    setHasSearched(true);

    if (!email.trim() || !data?.allCreditAccounts) {
      setAccounts([]);
      return;
    }

    const filtered = data.allCreditAccounts.filter((account) =>
      account.email.toLowerCase().includes(email.toLowerCase()),
    );

    setAccounts(filtered);
  };

  if (loading) return <p>Henter konti...</p>;
  if (error) return <p>Fejl: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      {/* 1. Opret kort knapper */}
      <ButtonBar>
        <Button onClick={handleGiftCardClick}>Opret Gavekort</Button>
        <Button onClick={handlePrepaidCardClick}>Opret Klippekort</Button>
      </ButtonBar>

      {/* 2. Email søgning */}
      <div style={{ marginTop: "2rem" }}>
        <SimpleDynamicForm
          inputs={[
            {
              name: "email",
              label: "Din Email",
              value: email,
              onChange: setEmail,
            },
          ]}
          buttons={[
            {
              id: "searchButton",
              text: "Søg",
              onClick: handleSearchByEmail,
            },
          ]}
        />
      </div>

      {/* 3. Viste kort */}
      {hasSearched && (
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
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <Card
                key={account.creditCode}
                link={`/account/${account.creditCode}`}
              >
                <h3>
                  {account.creditCode} ({account.type})
                </h3>
                <AccountSummaryTable account={account} />
              </Card>
            ))
          ) : (
            <p>Ingen kort fundet på denne email.</p>
          )}
        </div>
      )}
    </div>
  );
}

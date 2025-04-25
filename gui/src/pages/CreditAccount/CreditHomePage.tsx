import { Card } from "../../ui/Card";
import { GET_ALL_ACCOUNTS } from "../../services/accountService";
import { CreditAccount } from "../../types/CreditAccount";
import { useQuery } from "@apollo/client";
import { ButtonLink } from "../../ui/ButtonLink";
import { ButtonBar } from "../../components/ButtonBar";
import { Button } from "../../ui/Button";
import { SearchBar } from "../../components/SearchBar";
import { useState } from "react";

export default function CreditHomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useQuery<{
    allCreditAccounts: CreditAccount[];
  }>(GET_ALL_ACCOUNTS);
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
          <Button>Opret Gavekort</Button>
          <Button>Opret Klippekort</Button>
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

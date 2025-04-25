import { Card } from "../../ui/Card";
import { useQuery } from "@apollo/client";
import { GET_ALL_ACCOUNTS } from "../../services/accountService";
import { CreditAccountBase } from "../../types/CreditAccount";
import { Heading } from "../../ui/Heading";
import { ButtonBar } from "../../components/ButtonBar";
import { Button } from "../../ui/Button";

// src/pages/HomePage.tsx
export default function AccountPage() {
  const { data, loading, error } = useQuery(GET_ALL_ACCOUNTS);
  if (loading) return <p>Henter konti...</p>;
  if (error) return <p>Fejl: {error.message}</p>;
  if (!data) return null;
  return (
    <div>
      <ButtonBar>
        <Button>Brug Kreditter</Button>
        <Button>Refunder Penge</Button>
        <Button>Refunder Kreditter</Button>
      </ButtonBar>
    </div>
  );
}

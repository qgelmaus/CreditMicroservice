import { useCreditAccountByCode } from "../hooks/useCreditAccountByCode";
import { Transaction } from "../hooks/useCreditAccountByCode";

interface Props {
  code: string;
}

export default function CreditAccountDetails({ code }: Props) {
  const { data, loading, error } = useCreditAccountByCode(code);

  if (loading) return <p>Henter data...</p>;
  if (error) return <p style={{ color: "red" }}>Fejl: {error.message}</p>;
  if (!data?.creditAccountByCode) return <p>Ingen konto fundet med koden "{code}".</p>;

  const account = data.creditAccountByCode;

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Konto: {account.creditCode}</h2>
      <p>Tilgængelige credits: {account.availableCredits}</p>
      <p>Oprindelig beløb: {account.originalMoney}</p>
      <h3 style={{ marginTop: "1rem", fontWeight: "bold" }}>Transaktioner:</h3>
      <ul>
        {account.transactions.map((tx: Transaction) => (
          <li key={tx.id}>
            [{tx.type}] {tx.credits} credits / {tx.money} kr. – {new Date(tx.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
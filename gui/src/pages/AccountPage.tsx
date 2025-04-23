import { useParams } from "react-router-dom";
import CreditAccountDetails from "../features/creditaccount/components/CreditAccountDetails";
import Layout from "../features/creditaccount/components/Layout";
import Header from "../features/creditaccount/components/Header";


export default function AccountPage() {
  const { code } = useParams();

  if (!code) {
    return (
      <Layout>
        <Header title="Fejl" subtitle="Ingen creditCode i URL'en" />
        <p style={{ color: "red" }}>URL mangler en konto-kode. Prøv fx /account/RR1240941</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="Credit Account Overview" subtitle={`Viser konto: ${code}`} />
      <CreditAccountDetails code={code} />
    </Layout>
  );
}
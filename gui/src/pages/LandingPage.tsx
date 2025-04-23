import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../features/creditaccount/components/Layout";
import Header from "../features/creditaccount/components/Header";
import {
  useCreateGiftAccount,
  useCreatePrepaidAccount,
} from "../features/creditaccount/graphql/mutation";

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchCode, setSearchCode] = useState("");
  const [step, setStep] = useState<"choose" | "gift" | "prepaid">("choose");
  const [giftEmail, setGiftEmail] = useState("");
  const [giftAmount, setGiftAmount] = useState("");

  const [prepaidEmail, setPrepaidEmail] = useState("");
  const [treatmentCount, setTreatmentCount] = useState(5);
  const [pricePerTreatment, setPricePerTreatment] = useState("");

  const [createGiftAccount, { loading: creatingGift, error: giftError }] =
    useCreateGiftAccount();
  const [
    createPrepaidAccount,
    { loading: creatingPrepaid, error: prepaidError },
  ] = useCreatePrepaidAccount();

  const handleSearch = () => {
    if (searchCode.trim()) {
      navigate(`/account/${searchCode.trim()}`);
    }
  };

  const handleCreateGift = async () => {
    try {
      const res = await createGiftAccount({
        variables: {
          input: {
            email: giftEmail,
            purchaseAmount: parseFloat(giftAmount),
          },
        },
      });
      if (res.data?.createGiftAccount?.creditCode) {
        const code = res.data.createGiftAccount.creditCode;
        navigate(`/account/${code}`);
      } else {
        console.error("Unexpected response: Missing creditCode");
      }
    } catch (err) {
      console.error("Fejl ved oprettelse af konto:", err);
    }
  };

  const handleCreatePrepaid = async () => {
    try {
      const res = await createPrepaidAccount({
        variables: {
          input: {
            email: prepaidEmail,
            treatmentCount,
            pricePerTreatment: parseFloat(pricePerTreatment),
          },
        },
      });
      if (res.data?.createPrepaidAccount?.creditCode) {
        const code = res.data.createPrepaidAccount.creditCode;
        navigate(`/account/${code}`);
      } else {
        console.error("Unexpected response: Missing creditCode");
      }
    } catch (err) {
      console.error("Fejl ved oprettelse af prepaid account:", err);
    }
  };

  return (
    <Layout>
      <Header title="Velkommen" subtitle="Vælg handling nedenfor" />

      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.2rem" }}>Søg efter eksisterende konto</h3>
        <input
          type="text"
          placeholder="Indtast creditCode..."
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
          style={{ padding: "0.5rem", width: "60%", marginRight: "0.5rem" }}
        />
        <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
          Søg
        </button>
      </div>

      <div>
        <h3 style={{ fontSize: "1.2rem" }}>Opret ny konto</h3>
        {step === "choose" && (
          <>
            <button
              onClick={() => setStep("gift")}
              style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
            >
              Gavekort
            </button>
            <button
              onClick={() => setStep("prepaid")}
              style={{ padding: "0.5rem 1rem" }}
            >
              Klippekort
            </button>
          </>
        )}

        {step === "gift" && (
          <div style={{ marginTop: "1rem" }}>
            <label>
              Email:
              <br />
              <input
                type="email"
                value={giftEmail}
                onChange={(e) => setGiftEmail(e.target.value)}
                style={{ padding: "0.5rem", width: "100%" }}
              />
            </label>
            <br />
            <label>
              Beløb:
              <br />
              <input
                type="number"
                value={giftAmount}
                onChange={(e) => setGiftAmount(e.target.value)}
                style={{ padding: "0.5rem", width: "100%" }}
              />
            </label>
            <br />
            <button
              onClick={handleCreateGift}
              disabled={creatingGift}
              style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
            >
              Opret Gavekort
            </button>
            {giftError && (
              <p style={{ color: "red" }}>Fejl: {giftError.message}</p>
            )}
          </div>
        )}

        {step === "prepaid" && (
          <div style={{ marginTop: "1rem" }}>
            <label>
              Email:
              <br />
              <input
                type="email"
                value={prepaidEmail}
                onChange={(e) => setPrepaidEmail(e.target.value)}
                style={{ padding: "0.5rem", width: "100%" }}
              />
            </label>
            <br />
            <label>
              Antal behandlinger:
              <br />
              <select
                value={treatmentCount}
                onChange={(e) => setTreatmentCount(parseInt(e.target.value))}
                style={{ padding: "0.5rem", width: "100%" }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </label>
            <br />
            <label>
              Pris pr. behandling:
              <br />
              <input
                type="number"
                value={pricePerTreatment}
                onChange={(e) => setPricePerTreatment(e.target.value)}
                style={{ padding: "0.5rem", width: "100%" }}
              />
            </label>
            <br />
            {pricePerTreatment && (
              <div style={{ marginTop: "1rem" }}>
                {(() => {
                  const raw = treatmentCount * parseFloat(pricePerTreatment);
                  const discountRate = treatmentCount === 10 ? 0.16 : 0.12;
                  const discounted = raw * (1 - discountRate);

                  return (
                    <div>
                      <p>
                        Normalpris: <strong>{raw.toFixed(2)} kr.</strong>
                      </p>
                      <p>
                        Rabat: <strong>{discountRate * 100}%</strong>
                      </p>
                      <p>
                        Pris efter rabat:{" "}
                        <strong>{discounted.toFixed(2)} kr.</strong>
                      </p>
                    </div>
                  );
                })()}
              </div>
            )}
            <button
              onClick={handleCreatePrepaid}
              disabled={creatingPrepaid}
              style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
            >
              Opret Klippekort
            </button>
            <div style={{ marginTop: "2rem" }}>
              <h4>Oversigt over rabat</h4>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "0.5rem",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                      Antal behandlinger
                    </th>
                    <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                      Rabat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                      5
                    </td>
                    <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                      12%
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                      10
                    </td>
                    <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                      16%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {prepaidError && (
              <p style={{ color: "red" }}>Fejl: {prepaidError.message}</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

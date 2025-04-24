import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SELECT_TYPE } from "../features/creditaccount/graphql/mutation";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [step, setStep] = useState<"start" | "gift" | "prepaid">("start");
  const navigate = useNavigate();
  const [selectType] = useMutation(SELECT_TYPE);

  const startGiftFlow = async () => {
    await selectType({ variables: { type: "GIFT_CARD" } });
    navigate("/giftaccount");
  };

  const startPrepaidFlow = async () => {
    await selectType({ variables: { type: "PREPAID_CARD" } });
    setStep("prepaid");
  };

  if (step === "gift") {
    return <p>Gavekort flowet er startet ✅</p>; // Her kan du vise næste trin
  }

  if (step === "prepaid") {
    return <p>Klippekort flowet er startet ✅</p>; // Eller vise komponent til prepaid
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Velkommen til vores CreditAccount system</h1>
      <p>Vælg hvilken type konto du vil oprette:</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button
          type="button"
          onClick={startGiftFlow}
          style={{ padding: "0.5rem 1rem" }}
        >
          Opret Gavekort
        </button>

        <button
          type="button"
          onClick={startPrepaidFlow}
          style={{ padding: "0.5rem 1rem" }}
        >
          Opret Klippekort
        </button>
      </div>
    </div>
  );
}

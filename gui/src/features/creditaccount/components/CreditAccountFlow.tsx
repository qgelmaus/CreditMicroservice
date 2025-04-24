import { useMutation } from "@apollo/client";
import {
  SELECT_TYPE,
  SET_EMAIL,
  SUBMIT_DETAILS,
  VALIDATE,
  FINALIZE,
} from "../graphql/mutation";
import { useState } from "react";

function CreditAccountFlowForm() {
  const [step, setStep] = useState("selectType");

  const [selectType] = useMutation(SELECT_TYPE);
  const [setEmail] = useMutation(SET_EMAIL);
  const [submitDetails] = useMutation(SUBMIT_DETAILS);
  const [validate] = useMutation(VALIDATE);
  const [finalize, { data }] = useMutation(FINALIZE);

  const handleSelectType = async (type: "GIFT_CARD" | "PREPAID_CARD") => {
    await selectType({ variables: { type } });
    setStep("setEmail");
  };

  const handleSetEmail = async (email: string) => {
    await setEmail({ variables: { email } });
    setStep("setDetails");
  };

  const handleSubmitDetails = async (details: any) => {
    await submitDetails({ variables: { details } });
    setStep("validate");
  };

  const handleValidate = async () => {
    await validate();
    setStep("finalize");
  };

  const handleFinalize = async () => {
    const result = await finalize();
    console.log("Konto oprettet:", result.data.finalizeCreditAccount);
    setStep("done");
  };

  return (
    <>
      {step === "selectType" && (
        <button onClick={() => handleSelectType("GIFT_CARD")}>Gavekort</button>
      )}
      {step === "setEmail" && (
        <input
          onBlur={(e) => handleSetEmail(e.target.value)}
          placeholder="Email"
        />
      )}
      {step === "setDetails" && (
        <button onClick={() => handleSubmitDetails({ amount: 500 })}>
          Indsend detaljer
        </button>
      )}
      {step === "validate" && <button onClick={handleValidate}>Valider</button>}
      {step === "finalize" && (
        <button onClick={handleFinalize}>Opret konto</button>
      )}
      {step === "done" && <p>✅ Konto oprettet!</p>}
    </>
  );
}

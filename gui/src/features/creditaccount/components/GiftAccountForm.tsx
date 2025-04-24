import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  SET_EMAIL,
  SUBMIT_DETAILS,
  VALIDATE,
  FINALIZE,
} from "../graphql/mutation";

export default function GiftAccountForm() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number>(500);
  const [step, setStep] = useState<"email" | "details" | "validate" | "done">(
    "email"
  );

  const [setEmailMutation] = useMutation(SET_EMAIL);
  const [submitDetails] = useMutation(SUBMIT_DETAILS);
  const [validate] = useMutation(VALIDATE);
  const [finalize, { data }] = useMutation(FINALIZE);

  const handleSetEmail = async () => {
    await setEmailMutation({ variables: { email } });
    setStep("details");
  };

  const handleSubmitDetails = async () => {
    await submitDetails({ variables: { details: { amount } } });
    setStep("validate");
  };

  const handleValidateAndFinalize = async () => {
    await validate();
    await finalize();
    setStep("done");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Opret gavekort</h2>

      {step === "email" && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSetEmail}>Næste</button>
        </div>
      )}

      {step === "details" && (
        <div>
          <input
            type="number"
            placeholder="Beløb"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button onClick={handleSubmitDetails}>Næste</button>
        </div>
      )}

      {step === "validate" && (
        <button onClick={handleValidateAndFinalize}>Valider og opret</button>
      )}

      {step === "done" && (
        <div>
          <h3>✅ Konto oprettet!</h3>
          <pre>{JSON.stringify(data?.finalizeCreditAccount, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

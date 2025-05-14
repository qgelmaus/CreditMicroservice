// GiftCardFlowManager.tsx

import { ReviewAndConfirmPage } from "./ReviewAndConfirmPage";
import { FillGiftAccountDetailsPage } from "./FillGiftAccountDetailsFlowPage";
import { SuccessPage } from "./SuccessPage";
import { SubmitEmailFlowPage } from "./SubmitEmailFlowPage";
import { useSubmitEmail } from "../../../../services/flow/useSubmitEmail";
import { useSubmitCreditAccountDetails } from "../../../../services/flow/useSubmitCreditAccountsDetails";
import { useValidateCreditAccount } from "../../../../services/flow/useValidateCreditAccount";
import { useFinalizeCreditAccount } from "../../../../services/flow/useFinalizeCreditAccount";
import { useGiftCardFlowForm } from "../../../../services/flow/useCardFlowForm";
import { useState } from "react";

export const GiftCardFlowManager = () => {
  const { submitEmail } = useSubmitEmail();
  const { submitDetails } = useSubmitCreditAccountDetails();
  const { validate } = useValidateCreditAccount();
  const { finalize } = useFinalizeCreditAccount();

  const [step, setStep] = useState<"email" | "fill" | "review" | "success">(
    "email",
  );
  const { formData, setField } = useGiftCardFlowForm();

  const handleNext = async () => {
    if (step === "email") {
      if (!formData.email) {
        alert("Udfyld venligst din email før du fortsætter.");
      }
      await submitEmail(formData.email);
      setStep("fill");
    } else if (step === "fill") {
      await submitDetails({
        email: formData.email,
        credits: formData.credits,
      });
      await validate();
      setStep("review");
    } else if (step === "review") {
      await finalize();
      setStep("success");
    }
  };

  const handleBack = () => {
    if (step === "review") setStep("fill");
    else if (step === "fill") setStep("email");
  };

  return (
    <>
      {step === "email" && (
        <SubmitEmailFlowPage
          formData={formData}
          setField={setField}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === "fill" && (
        <FillGiftAccountDetailsPage
          formData={formData}
          setField={setField}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === "review" && (
        <ReviewAndConfirmPage
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === "success" && <SuccessPage />}
    </>
  );
};

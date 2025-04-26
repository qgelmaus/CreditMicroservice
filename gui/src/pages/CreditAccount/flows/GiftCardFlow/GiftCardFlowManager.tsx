// GiftCardFlowManager.tsx
import { useEffect, useState } from "react";
import { ReviewAndConfirmPage } from "./ReviewAndConfirmPage";
import { FillGiftAccountDetailsPage } from "./FillGiftAccountDetailsFlowPage";
import { SuccessPage } from "./SuccessPage";
import { SubmitEmailFlowPage } from "./SubmitEmailFlowPage";
import { useSubmitEmail } from "../../../../services/flow/useSubmitEmail";
import { useSubmitCreditAccountDetails } from "../../../../services/flow/useSubmitCreditAccountsDetails";
import { useValidateCreditAccount } from "../../../../services/flow/useValidateCreditAccount";
import { useFinalizeCreditAccount } from "../../../../services/flow/useFinalizeCreditAccount";
import { useGiftCardFlowForm } from "../../../../services/flow/useGiftCardFlowForm";
import { useSelectCreditAccountType } from "../../../../services/flow/useSelectedCreditAccountType";

export const GiftCardFlowManager = () => {
	const { selectType } = useSelectCreditAccountType();
	const { submitEmail } = useSubmitEmail();
	const { submitDetails } = useSubmitCreditAccountDetails();
	const { validate } = useValidateCreditAccount();
	const { finalize } = useFinalizeCreditAccount();

	const [step, setStep] = useState<"email" | "fill" | "review" | "success">(
		"email",
	);
	const { formData, setField } = useGiftCardFlowForm();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			await selectType("GIFT_CARD");
		})();
	}, []);

	const handleNext = async () => {
		if (step === "email") {
			await submitEmail(formData.email);
			setStep("fill");
		} else if (step === "fill") {
			await submitDetails(formData);
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

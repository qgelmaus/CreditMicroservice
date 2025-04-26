import { useState } from "react";

import { ReviewAndConfirmPage } from "./ReviewAndConfirmPage";
import { FillGiftAccountDetailsPage } from "./FillGiftAccountDetailsFlowPage";
import { SuccessPage } from "./SuccessPage";

type Step = "fill" | "review" | "success";

export const GiftCardFlowManager = () => {
	const [step, setStep] = useState<Step>("fill");
	const [formData, setFormData] = useState<Record<string, any>>({});

	const handleNext = () => {
		if (step === "fill") setStep("review");
		else if (step === "review") setStep("success");
	};

	const handleBack = () => {
		if (step === "review") setStep("fill");
	};

	return (
		<>
			{step === "fill" && (
				<FillGiftAccountDetailsPage
					formData={formData}
					setFormData={setFormData}
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

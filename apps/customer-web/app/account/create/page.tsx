"use client";
import { useState } from "react";
import {
	PageHeader,
	Grid,
} from "@hovedopgave2025/ui";
import { useCreateAndCompleteAccount } from "./hook";
import * as steps from "./steps";


enum FlowState {
	ChooseType = "chooseType",
	EnterEmail = "enterEmail",
	EnterGiftDetails = "enterGiftDetails",
	EnterPrepaidDetails = "enterPrepaidDetails",
	Summary = "summary",
	Payment = "payment",
	Success = "success",
}

export default function CreateCreditFlow() {
	const { createAndComplete, loading, error } = useCreateAndCompleteAccount();
	const [flowState, setFlowState] = useState<FlowState>(FlowState.ChooseType);
	const [selectedType, setSelectedType] = useState<"GIFT_CARD" | "PREPAID_CARD">("GIFT_CARD");
	const [selectedPaymentOption, setSelectedPaymentOption] = useState<"STRIPE" | "MOBILEPAY">("STRIPE");
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("");
	const [treatmentCount, setTreatmentCount] = useState(10);
	const [pricePerTreatment, setPricePerTreatment] = useState(0);
	const [submitted, setSubmitted] = useState(false);
	const [cost, setCost] = useState(0);

	const calculateCost = () => {
		if (selectedType === "GIFT_CARD") {
			setCost(parseInt(amount));
		}
		if (selectedType === "PREPAID_CARD") {
			if (treatmentCount === 5) {
				setCost(parseInt(amount) * pricePerTreatment * 0.88);
			}
			if (treatmentCount === 10) {
				setCost(parseInt(amount) * pricePerTreatment * 0.84);
			}
		}
	};

	
	const handlePayment = async () => {
		try {
			const result = await createAndComplete({
				email,
				type: selectedType,
				treatmentCount: selectedType === "PREPAID_CARD" ? treatmentCount : undefined,
				pricePerTreatment: selectedType === "PREPAID_CARD" ? pricePerTreatment : undefined,
				purchaseAmount: parseInt(amount),
				paymentMethod: selectedPaymentOption,
			});
			if (result.paymentDetails.stripeUrl) {
				window.location.href = result.paymentDetails.stripeUrl;
			}
		} catch (error) {
			console.error("Error creating account and completing payment:", error);
		}
	};

	return (
		<div className="p-6">
			<Grid maxWidth="350px" columns={1}>
				<PageHeader title="Ny kreditbeholdning" />

				{flowState === FlowState.ChooseType && (
					<steps.ChooseTypeStep selectedType={selectedType} setSelectedType={setSelectedType} onContinue={() => setFlowState(FlowState.EnterEmail)} />
				)}

				{flowState === FlowState.EnterEmail && (
					<steps.EmailStep email={email} setEmail={setEmail} onContinue={() => {
						if (selectedType === "GIFT_CARD") setFlowState(FlowState.EnterGiftDetails);
						else setFlowState(FlowState.EnterPrepaidDetails);
					}} />
				)}

				{flowState === FlowState.EnterGiftDetails && (
					<steps.GiftDetailsStep amount={amount} setAmount={setAmount} message={message} setMessage={setMessage} onContinue={() => {
						calculateCost();
						setFlowState(FlowState.Summary);
					}} />
				)}

				{flowState === FlowState.EnterPrepaidDetails && (
					<steps.PrepaidDetailsStep treatmentCount={treatmentCount} setTreatmentCount={setTreatmentCount} pricePerTreatment={pricePerTreatment} setPricePerTreatment={setPricePerTreatment} onContinue={() => {
						calculateCost();
						setFlowState(FlowState.Summary);
					}} />
				)}

				{flowState === FlowState.Summary && (
					<steps.SummaryStep
						selectedType={selectedType}
						email={email}
						amount={amount}
						cost={cost}
						message={message}
						onConfirm={() => setFlowState(FlowState.Payment)}
					/>
				)}

				{flowState === FlowState.Payment && (
					<steps.PaymentStep
						email={email}
						amount={amount}
						selectedPaymentOption={selectedPaymentOption}
						setSelectedPaymentOption={setSelectedPaymentOption}
						onPay={handlePayment}
					/>
				)}
			</Grid>
		</div>
	);
}

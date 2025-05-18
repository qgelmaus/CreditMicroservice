"use client";
import { useState } from "react";
import {
	PageHeader,
	Section,
	Grid,
	Dropdown,
	Button,
	FormRow,
	Input,
	Card,
} from "@hovedopgave2025/ui";
import { TextArea } from "../../../../../packages/ui/src/components/TextArea";
import { create } from "domain";
import { useCreateAndCompleteAccount } from "./hook";

type FlowState = "chooseType" | "enterEmail" | "enterGiftDetails" | "enterPrepaidDetails" | "summary" | "payment" | "success";

export default function CreateCreditFlow() {
	const { createAndComplete, loading, error } = useCreateAndCompleteAccount();
	const [flowState, setFlowState] = useState<FlowState>("chooseType");
	const [selectedType, setSelectedType] = useState<
		"GIFT_CARD" | "PREPAID_CARD"
	>("GIFT_CARD");

	const [selectedPaymentOption, setSelectedPaymentOption] = useState<
	"STRIPE" | "MOBILEPAY" >("STRIPE");

	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("");
	const [treatmentCount, setTreatmentCount] = useState(10);
	const [pricePerTreatment, setPricePerTreatment] = useState(0);
	const [submitted, setSubmitted] = useState(false);
	const [cost, setCost] = useState(0);

	const options = [
		{ label: "Gavekort", value: "GIFT_CARD" },
		{ label: "Klippekort", value: "PREPAID_CARD" },
	];

	const paymentOptions = [
		{ label: "MobilePay", value: "MOBILEPAY" },
		{ label: "Kreditkort", value: "STRIPE" },
	];

	const calculateCost = () => {
		if (selectedType === "GIFT_CARD") {
			setCost(parseInt(amount));
		}
		if (selectedType === "PREPAID_CARD") {
			if (treatmentCount === 5) {
			setCost(parseInt(amount) * pricePerTreatment * 0.88);
		}
		if(treatmentCount === 10) {
			setCost(parseInt(amount) * pricePerTreatment * 0.84);
		}
	}}

	const handleContinue = () => {
		if (selectedType) setFlowState("enterEmail");
		if (selectedType === "GIFT_CARD" && email) {
			setFlowState("enterGiftDetails");
			calculateCost();
		}
		if(selectedType === "PREPAID_CARD" && email) {
			setFlowState("enterPrepaidDetails");
			calculateCost();
		}
		if(selectedType === "GIFT_CARD" && email && amount) {
			setFlowState("summary");
			calculateCost();
		}
	};

	

	const handleSelectTypeFlowState = () => {
		if (selectedType === "GIFT_CARD") {
			setFlowState("enterGiftDetails");
		} else if (selectedType === "PREPAID_CARD") {
			setFlowState("enterPrepaidDetails");
		}
	}
	

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);

		if (email && amount) {
			setFlowState("summary");
			calculateCost();
		}
	};

	const handleConfirm = () => {

		setFlowState("payment");}

	const handlePayment = async () => {
		try{
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
			// Handle error (e.g., show a notification to the user)

			
		}
	};



	return (
		<div className="p-6">
			<Grid maxWidth="350px" columns={1}>
				<PageHeader title="Ny kreditbeholdning" />

				{flowState === "chooseType" && (
					<Section title="Vælg type">
						<Dropdown
							label="Vælg type"
							value={selectedType}
							onChange={(e) =>
								setSelectedType(e.target.value as "GIFT_CARD" | "PREPAID_CARD")
							}
							options={options}
						/>
						{selectedType && (
							<div style={{ marginTop: "1rem" }}>
								<Button onClick={handleContinue}>Næste</Button>
							</div>
						)}
					</Section>
				)}

				{flowState === "enterEmail" && (
					<Section title="Indtast oplysninger">
						<form onSubmit={handleSubmit}>
							<FormRow
								label="Email"
								htmlFor="email"
								error={!email && submitted ? "Påkrævet" : ""}
							>
								<Input
									id="email"
									label=""
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email.. "
								/>
							</FormRow>
							
							<Button onClick={handleSelectTypeFlowState}>Fortsæt</Button>
						</form>
					</Section>
				)}
				
				{flowState === "enterGiftDetails" && (
					<Section title="Indtast gavekort oplysninger">
						<form onSubmit={handleSubmit}>
						<FormRow
								label="Ønsket mængde kredditter"
								htmlFor="amount"
								error={!amount && submitted ? "Påkrævet" : ""}
							>
								<Input
									id="amount"
									type="number"
									label=""
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									placeholder="F.eks. 500"
								/>
							</FormRow>
							<FormRow
								label="Besked til modtager"
								htmlFor="message"
								
							>
								<TextArea
									id="message"
									
									label=""
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Skriv en besked til modtageren"
								/>
							</FormRow>
							</form>
							
						<Button onClick={() => handleContinue()}>Fortsæt</Button>
						</Section>)}

				{flowState === "summary" && (
					<Section title="Opsummering">	
					<Grid>

						<Card>
						<Grid columns={1} gap="0.5rem">

						<p>
							<strong>Type:</strong>{" "}
							{selectedType === "GIFT_CARD" ? "Gavekort" : "Klippekort"}
						</p>
						<p>
							<strong>Email:</strong> {email}
						</p>
						<p>
							<strong>Kreditter:</strong> {amount} kr.
						</p>

						<p>
							<strong>Pris:</strong> {cost} kr.
						</p>


						<p>
							<strong>Besked til modtager:</strong> {" "}{message}
						</p>
						</Grid>
						</Card>
						<Button onClick={handleConfirm}>
							Gå til betaling
						</Button>
					</Grid>
					</Section>

				)}
				{flowState === "payment" && (
					<Section title="Betaling">	
					<Grid>

						
						<Grid columns={1} gap="0.5rem">

					
						<p>
							<strong>Email:</strong> {email}
						</p>
						<p>
							<strong>Beløb:</strong> {amount} kr.
						</p>
						<FormRow error="" label="">
							<Dropdown
								label="Vælg betalingsmetode"
								value={selectedPaymentOption}
								onChange={(e) =>
									setSelectedPaymentOption(e.target.value as "STRIPE" | "MOBILEPAY")
								}
								options={paymentOptions}
							/>
						</FormRow>

						</Grid>
						
						<Button onClick={handlePayment}>
							Bekræft og betal
						</Button>
					</Grid>
					</Section>
					
				)}
			</Grid>
		</div>
	);
}

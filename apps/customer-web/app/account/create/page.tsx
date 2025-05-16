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
} from "@hovedopgave2025/ui";

type FlowState = "chooseType" | "enterDetails" | "summary";

export default function CreateCreditFlow() {
	const [flowState, setFlowState] = useState<FlowState>("chooseType");
	const [selectedType, setSelectedType] = useState<
		"GIFT_CARD" | "PREPAID_CARD" | ""
	>("");

	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const options = [
		{ label: "Gavekort", value: "GIFT_CARD" },
		{ label: "Klippekort", value: "PREPAID_CARD" },
	];

	const handleContinue = () => {
		if (selectedType) setFlowState("enterDetails");
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);

		if (email && amount) {
			setFlowState("summary");
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

				{flowState === "enterDetails" && (
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
									placeholder="Kundens email"
								/>
							</FormRow>
							<FormRow
								label="Beløb"
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
							<Button>Fortsæt</Button>
						</form>
					</Section>
				)}

				{flowState === "summary" && (
					<Section title="Opsummering">
						<p>
							<strong>Type:</strong>{" "}
							{selectedType === "GIFT_CARD" ? "Gavekort" : "Klippekort"}
						</p>
						<p>
							<strong>Email:</strong> {email}
						</p>
						<p>
							<strong>Beløb:</strong> {amount} kr.
						</p>
						<Button onClick={() => alert("Mutation sendes her!")}>
							Bekræft og opret
						</Button>
					</Section>
				)}
			</Grid>
		</div>
	);
}

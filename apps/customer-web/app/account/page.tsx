"use client";
import { Button, Card, PageHeader, Section } from "@ui";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function CreditAccountPage() {
	const [modalOpen, setModalOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState<number | null>(null);

	// Eksempel på en callback der kunne komme fra modalen
	const handleSubmit = (data: { email: string; amount: number }) => {
		setEmail(data.email);
		setAmount(data.amount);
		setSubmitted(true);
		setModalOpen(false);
	};

	const router = useRouter();

	return (
		<div className="p-6">
			<PageHeader
				title="Opret en ny kreditbeholdning"
				subtitle="Vælg ny kreditbeholdning og følg instruktionerne"
			/>
			<Section title="">
				<Button onClick={() => router.push("/account/create")}>
					Ny beholdning
				</Button>
			</Section>

			{submitted && email && amount !== null && (
				<Section title="Opsummering">
					<Card>
						<p>
							<strong>Email:</strong> {email}
						</p>
						<p>
							<strong>Beløb:</strong> {amount} kr.
						</p>
					</Card>
				</Section>
			)}
		</div>
	);
}

"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/button/Button";

type FlowState =
	| "start"
	| "typeSelected"
	| "emailSet"
	| "detailsSet"
	| "validated";
type CreditAccountType = "GIFT_CARD" | "PREPAID_CARD";

interface FlowContext {
	type?: CreditAccountType;
	email?: string;
	details?: Record<string, any>;
}

export default function CreateCreditAccountPage() {
	const [state, setState] = useState<FlowState>("start");
	const [context, setContext] = useState<FlowContext>({});

	const [selectedType, setSelectedType] = useState<CreditAccountType>();
	const [emailInput, setEmailInput] = useState("");
	const [detailsInput, setDetailsInput] = useState<Record<string, any>>({});
	const [isPaying, setIsPaying] = useState(false);

	const searchParams = useSearchParams();

	useEffect(() => {
		if (searchParams.get("success") === "true") {
			sendToBackend(context);
		}
	}, [searchParams]);

	async function sendToBackend(context: FlowContext) {
		try {
			const response = await fetch("https://din-backend-url/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authorization: "Bearer ...", // hvis du har auth
				},
				body: JSON.stringify({
					query: `
          mutation CreateCreditAccount($input: CreateCreditAccountInput!) {
            createCreditAccount(input: $input) {
              creditCode
              email
              type
            }
          }
        `,
					variables: {
						input: {
							type: context.type,
							email: context.email,
							...context.details,
						},
					},
				}),
			});

			const result = await response.json();

			if (result.errors) {
				console.error(result.errors);
				alert("Fejl ved oprettelse i backend");
			} else {
				console.log("Konto oprettet:", result.data.createCreditAccount);
				setState("validated");
			}
		} catch (error) {
			console.error(error);
			alert("Netværksfejl ved oprettelse af konto");
		}
	}

	async function handlePayment() {
		setIsPaying(true);

		try {
			const res = await fetch("/api/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(context),
			});

			const data = await res.json();
			if (data.url) {
				window.location.href = data.url;
			} else {
				alert("Noget gik galt med betalingen");
			}
		} catch (err) {
			console.error(err);
			alert("Betaling fejlede");
		} finally {
			setIsPaying(false);
		}
	}

	function validateAndSubmit() {
		console.log("Valideret:", context);
		setState("validated");
	}

	const stepLabels: Record<FlowState, string> = {
		start: "Trin 1 af 4: Vælg korttype",
		typeSelected: "Trin 2 af 4: Indtast email",
		emailSet: "Trin 3 af 4: Indtast detaljer",
		detailsSet: "Trin 4 af 4: Gennemgå og bekræft",
		validated: "Konto oprettet!",
	};

	return (
		<div className="p-6 max-w-xl mx-auto space-y-6">
			<h2 className="text-lg font-semibold">{stepLabels[state]}</h2>

			{/* Step: Vælg korttype */}
			{state === "start" && (
				<div className="flex flex-col gap-4">
					<select
						onChange={(e) =>
							setSelectedType(e.target.value as CreditAccountType)
						}
						defaultValue=""
						className="border p-2 rounded-md"
					>
						<option value="" disabled>
							-- Vælg type --
						</option>
						<option value="GIFT_CARD">Gavekort</option>
						<option value="PREPAID_CARD">Klippekort</option>
					</select>

					<div className="flex justify-end">
						<Button
							onClick={() => {
								if (!selectedType) return alert("Vælg en type først");
								setContext((c) => ({ ...c, type: selectedType }));
								setState("typeSelected");
							}}
						>
							Næste
						</Button>
					</div>
				</div>
			)}

			{/* Step: Indtast email */}
			{state === "typeSelected" && (
				<div className="flex flex-col gap-4">
					<input
						type="email"
						placeholder="Email"
						className="border p-2 rounded-md"
						value={emailInput}
						onChange={(e) => setEmailInput(e.target.value)}
					/>
					<div className="flex justify-between">
						<Button variant="secondary" onClick={() => setState("start")}>
							Tilbage
						</Button>
						<Button
							onClick={() => {
								if (!emailInput.includes("@")) return alert("Ugyldig email");
								setContext((c) => ({ ...c, email: emailInput }));
								setState("emailSet");
							}}
						>
							Næste
						</Button>
					</div>
				</div>
			)}

			{/* Step: Indtast detaljer */}
			{state === "emailSet" && context.type === "GIFT_CARD" && (
				<div className="flex flex-col gap-4">
					<input
						type="number"
						placeholder="Antal credits"
						className="border p-2 rounded-md"
						value={detailsInput.credits ?? ""}
						onChange={(e) =>
							setDetailsInput({
								...detailsInput,
								credits: Number(e.target.value),
							})
						}
					/>
					<div className="flex justify-between">
						<Button
							variant="secondary"
							onClick={() => setState("typeSelected")}
						>
							Tilbage
						</Button>
						<Button
							onClick={() => {
								if (
									typeof detailsInput.credits !== "number" ||
									isNaN(detailsInput.credits)
								) {
									alert("Udfyld antal credits");
									return;
								}
								setContext((c) => ({ ...c, details: detailsInput }));
								setState("detailsSet");
							}}
						>
							Næste
						</Button>
					</div>
				</div>
			)}

			{state === "emailSet" && context.type === "PREPAID_CARD" && (
				<div className="flex flex-col gap-4">
					<input
						type="number"
						placeholder="Antal behandlinger"
						className="border p-2 rounded-md"
						value={detailsInput.treatmentCount ?? ""}
						onChange={(e) =>
							setDetailsInput({
								...detailsInput,
								treatmentCount: Number(e.target.value),
							})
						}
					/>
					<input
						type="number"
						placeholder="Pris per behandling"
						className="border p-2 rounded-md"
						value={detailsInput.pricePerTreatment ?? ""}
						onChange={(e) =>
							setDetailsInput({
								...detailsInput,
								pricePerTreatment: Number(e.target.value),
							})
						}
					/>
					<div className="flex justify-between">
						<Button
							variant="secondary"
							onClick={() => setState("typeSelected")}
						>
							Tilbage
						</Button>
						<Button
							onClick={() => {
								if (
									typeof detailsInput.treatmentCount !== "number" ||
									typeof detailsInput.pricePerTreatment !== "number" ||
									Number.isNaN(detailsInput.treatmentCount) ||
									Number.isNaN(detailsInput.pricePerTreatment)
								) {
									alert("Udfyld alle felter");
									return;
								}
								setContext((c) => ({ ...c, details: detailsInput }));
								setState("detailsSet");
							}}
						>
							Næste
						</Button>
					</div>
				</div>
			)}

			{/* Step: Gennemgå og valider */}
			{state === "detailsSet" && (
				<div className="space-y-4">
					<pre className="bg-gray-100 p-4 rounded text-sm">
						{JSON.stringify(context, null, 2)}
					</pre>
					<div className="flex justify-between">
						<Button variant="secondary" onClick={() => setState("emailSet")}>
							Tilbage
						</Button>
						<Button onClick={handlePayment} disabled={isPaying}>
							{isPaying ? "Behandler betaling..." : "Bekræft og betal"}
						</Button>
					</div>
				</div>
			)}

			{/* Step: Slut */}
			{state === "validated" && (
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-bold text-green-700">Konto oprettet!</h2>

					<div className="bg-gray-50 p-4 rounded-md text-left inline-block shadow">
						<p>
							<strong>Type:</strong>{" "}
							{context.type === "GIFT_CARD" ? "Gavekort" : "Klippekort"}
						</p>
						<p>
							<strong>Email:</strong> {context.email}
						</p>
						<p>
							<strong>Beløb:</strong>{" "}
							{context.type === "GIFT_CARD"
								? `${context.details?.credits ?? 0} kr`
								: `${context.details?.pricePerTreatment ?? 0} × ${context.details?.treatmentCount ?? 0} kr = ${
										(context.details?.pricePerTreatment ?? 0) *
										(context.details?.treatmentCount ?? 0)
									} kr`}
						</p>
					</div>

					<div className="flex justify-center gap-4 flex-wrap">
						<Button
							variant="secondary"
							onClick={() => window.location.reload()}
						>
							Start forfra
						</Button>
						<Button onClick={() => alert("Sender kvittering...")}>
							Send kvittering
						</Button>
						<Button onClick={() => alert("Downloader PDF...")}>
							Download kvittering
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

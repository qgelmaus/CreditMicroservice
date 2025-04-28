// FillGiftAccountDetailsPage.tsx
import { DynamicForm } from "../../../../components/DynamicForm";
import type { PrepaidCardFormData } from "../../../../types/CreditAccount";

const fields = [
	{ name: "pricePerTreatment", label: "Pris per behandling", type: "number" },
	{
		name: "treatmentCount",
		label: "Antal behandlinger",
		type: "select",
		options: [
			{ value: 5, label: "5, 12% Rabat" },
			{ value: 10, label: "10, 16% Rabat" },
		],
	},
];

type FillPrepaidAccountDetailsPageProps = {
	formData: PrepaidCardFormData;
	setField: <K extends keyof PrepaidCardFormData>(
		field: K,
		value: PrepaidCardFormData[K],
	) => void;
	onNext: () => void;
	onBack: () => void;
};

export const FillPrepaidAccountDetailsPage = ({
	formData,
	setField,
	onNext,
	onBack,
}: FillPrepaidAccountDetailsPageProps) => {
	const handleChange = (fieldName: string, value: any) => {
		const field = fields.find((f) => f.name === fieldName);
		if (field?.type === "number") {
			setField(fieldName as keyof PrepaidCardFormData, Number(value));
		} else {
			setField(fieldName as keyof PrepaidCardFormData, value);
		}
	};

	return (
		<div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
			<h2 style={{ textAlign: "center" }}>Udfyld Credits</h2>

			<DynamicForm
				fields={fields}
				formData={formData}
				onChange={handleChange}
			/>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "20px",
				}}
			>
				<button type="button" onClick={onBack}>
					Tilbage
				</button>
				<button type="button" onClick={onNext}>
					Næste
				</button>
			</div>
		</div>
	);
};

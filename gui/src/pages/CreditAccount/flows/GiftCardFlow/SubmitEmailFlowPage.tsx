// SubmitEmailFlowPage.tsx
import { DynamicForm } from "../../../../components/DynamicForm";
import type { GiftCardFormData } from "../../../../types/CreditAccount";

const fields = [{ name: "email", label: "Email", type: "text" }];

type SubmitEmailFlowPageProps = {
	formData: GiftCardFormData;
	setField: <K extends keyof GiftCardFormData>(
		field: K,
		value: GiftCardFormData[K],
	) => void;
	onNext: () => void;
	onBack: () => void;
};

export const SubmitEmailFlowPage = ({
	formData,
	setField,
	onNext,
	onBack,
}: SubmitEmailFlowPageProps) => {
	const handleChange = (fieldName: string, value: any) => {
		setField(fieldName as keyof GiftCardFormData, value);
	};

	return (
		<div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
			<h2 style={{ textAlign: "center" }}>Udfyld Email</h2>

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

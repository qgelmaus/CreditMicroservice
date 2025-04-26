import { DynamicForm } from "../../../../components/DynamicForm";

const fields = [
	{ name: "email", label: "Email", type: "text" },
	{ name: "credits", label: "Antal Credits", type: "number" },
];

type FillGiftAccountDetailsPageProps = {
	formData: Record<string, any>;
	setFormData: (formData: Record<string, any>) => void;
	onNext: () => void;
	onBack: () => void;
};

export const FillGiftAccountDetailsPage = ({
	formData,
	setFormData,
	onNext,
	onBack,
}: FillGiftAccountDetailsPageProps) => {
	const handleChange = (fieldName: string, value: any) => {
		setFormData((prev) => ({ ...prev, [fieldName]: value }));
	};

	const handleSubmit = () => {
		onNext();
	};

	return (
		<div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
			<h2 style={{ textAlign: "center" }}>Udfyld Oplysninger</h2>

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
				<button type="button" onClick={handleSubmit}>
					Næste
				</button>
			</div>
		</div>
	);
};

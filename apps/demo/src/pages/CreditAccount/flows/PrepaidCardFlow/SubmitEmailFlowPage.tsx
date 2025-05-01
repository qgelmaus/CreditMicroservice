import { useEffect, useState } from "react";
import { DynamicForm } from "../../../../components/DynamicForm";
import type { PrepaidCardFormData } from "../../../../types/CreditAccount";

const fields = [{ name: "email", label: "Email", type: "text" }];

type SubmitEmailFlowPageProps = {
	formData: PrepaidCardFormData;
	setField: <K extends keyof PrepaidCardFormData>(
		field: K,
		value: PrepaidCardFormData[K],
	) => void;
	onNext: () => void;
	onBack: () => void;
};

const isValidEmail = (email: string): boolean => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
};

export const SubmitEmailFlowPage = ({
	formData,
	setField,
	onNext,
	onBack,
}: SubmitEmailFlowPageProps) => {
	const [emailValid, setEmailValid] = useState(false);

	useEffect(() => {
		setEmailValid(isValidEmail(formData.email || ""));
	}, [formData.email]);

	const handleChange = (fieldName: string, value: any) => {
		setField(fieldName as keyof PrepaidCardFormData, value);
	};

	return (
		<div
			className="page-content-wrapper"
			style={{ maxWidth: "350px", margin: "0 auto", padding: "20px" }}
		>
			<h2 style={{ textAlign: "center" }}>Udfyld Email</h2>

			<DynamicForm
				fields={fields}
				formData={formData}
				onChange={handleChange}
				fieldStyles={{
					email: {
						border:
							!emailValid && formData.email
								? "1px solid red"
								: "1px solid #ccc",
					},
				}}
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
				<button
					type="button"
					onClick={onNext}
					disabled={!emailValid}
					style={{
						opacity: emailValid ? 1 : 0.5,
						cursor: emailValid ? "pointer" : "not-allowed",
					}}
				>
					Næste
				</button>
			</div>
		</div>
	);
};

import { useState } from "react";
import { SimpleDynamicForm } from "../../components/SimpleDynamicForm";
import { Button } from "../../ui/Button";
import { CheckBoxBar } from "../../components/CheckBoxBar";
import { useCreateGiftCard } from "../../hooks/CreditAccount/useCreateGiftCard";
import { useCreatePrepaidCard } from "../../hooks/CreditAccount/useCreatePrepaidcard";
import { useNavigate } from "react-router-dom";
import { isPositiveNumber, isValidEmail } from "src/utils/validation";

export default function AdminCardCreationPage() {
	const [cardType, setCardType] = useState<"GIFT_CARD" | "PREPAID_CARD" | "">(
		"",
	);
	const { createGiftCard } = useCreateGiftCard();
	const { createPrepaidCard } = useCreatePrepaidCard();

	const [paymentMethod, setPaymentMethod] = useState<
		"MOBILEPAY" | "KORT" | "FAKTURA" | ""
	>("");
	const [formData, setFormData] = useState<Record<string, any>>({
		email: "",
		purchaseAmount: "",
		treatmentCount: "",
		pricePerTreatment: "",
		paymentMethod: "",
		sendConfirmation: "",
	});

	const navigate = useNavigate();

	const handleFormChange = (fieldName: string, value: any) => {
		setFormData((prev) => ({ ...prev, [fieldName]: value }));
	};
	const [checkboxOptions, setCheckboxOptions] = useState([
		{
			label: "Send bekræftelse til kunde",
			value: "sendConfirmation",
			checked: false,
		},
	]);

	const handleSubmit = async () => {
		console.log("Form Data:", formData);
		if (!cardType) {
			console.error("You must choose a card type");
			return;
		}
		if (cardType === "GIFT_CARD") {
			const result = await createGiftCard(
				formData.email,
				Number.parseFloat(formData.purchaseAmount),
			);
			const account = result.data?.createGiftAccount;

			if (account) {
				navigate("/admin/create/success", { state: { account } });
			}
		}

		if (cardType === "PREPAID_CARD") {
			const result = await createPrepaidCard(
				formData.email,
				Number.parseFloat(formData.pricePerTreatment),
				Number.parseFloat(formData.treatmentCount),
			);
			const account = result.data?.createPrepaidAccount;
			if (account) {
				navigate("/admin/create/success", { state: { account } });
			}
		}
	};

	const handleCheckboxChange = (value: string, checked: boolean) => {
		setCheckboxOptions((prev) =>
			prev.map((option) =>
				option.value === value ? { ...option, checked } : option,
			),
		);
	};

	const baseInputs = [
		{
			name: "email",
			label: "Email",
			value: formData.email,
			onChange: (v: string) => handleFormChange("email", v),
		},
	];

	const giftCardInputs = [
		{
			name: "purchaseAmount",
			label: "Købsbeløb (DKK)",
			value: formData.purchaseAmount,
			onChange: (v: string) => handleFormChange("purchaseAmount", v),
		},
	];

	const prepaidCardInputs = [
		{
			name: "treatmentCount",
			label: "Antal behandlinger",
			value: formData.treatmentCount,
			onChange: (v: string) => handleFormChange("treatmentCount", v),
		},
		{
			name: "pricePerTreatment",
			label: "Pris pr. behandling (DKK)",
			value: formData.pricePerTreatment,
			onChange: (v: string) => handleFormChange("pricePerTreatment", v),
		},
	];

	const availableCardTypes = [
		{ label: "Vælg korttype", value: "" },
		{ label: "Gavekort", value: "GIFT_CARD" },
		{ label: "Klippekort", value: "PREPAID_CARD" },
	];

	const paymentMethods = [
		{ label: "Vælg betalingsmetode", value: "" },
		{ label: "MobilePay", value: "MOBILEPAY" },
		{ label: "Kort", value: "CARD" },
		{ label: "Faktura", value: "INVOICE" },
	];

	return (
		<div
			className="page-content-wrapper"
			style={{ maxWidth: "350px", margin: "0 auto", padding: "20px" }}
		>
			<h2 style={{ textAlign: "center" }}>Opret nyt kort</h2>

			{/* Vælg korttype */}
			<div
				style={{
					display: "table-column",
					justifyContent: "space-between",
					marginTop: "20px",
					width: "100%",
				}}
			>
				<select
					value={cardType}
					onChange={(e) =>
						setCardType(e.target.value as "GIFT_CARD" | "PREPAID_CARD")
					}
					style={{ width: "100%", padding: "0.5rem" }}
				>
					{availableCardTypes.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				{/* Dynamisk form */}
				<SimpleDynamicForm
					inputs={[
						...baseInputs,
						...(cardType === "GIFT_CARD" ? giftCardInputs : []),
						...(cardType === "PREPAID_CARD" ? prepaidCardInputs : []),
					]}
				/>

				{/* Vælg betalingsmetode */}
				<select
					value={paymentMethod}
					onChange={(e) =>
						setPaymentMethod(e.target.value as "MOBILEPAY" | "KORT" | "FAKTURA")
					}
					style={{ width: "100%", padding: "0.5rem" }}
				>
					{paymentMethods.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				{/* Ekstra muligheder */}
				<CheckBoxBar
					options={checkboxOptions}
					onChange={handleCheckboxChange}
				/>

				<Button
					onClick={handleSubmit}
					disabled={
						(isValidEmail(formData.email) &&
							isPositiveNumber(formData.purchaseAmount)) ||
						isPositiveNumber(formData.pricePerTreatment)
					}
				>
					Opret
				</Button>
			</div>
		</div>
	);
}

// FillGiftAccountDetailsPage.tsx
import { isPositiveNumber } from "src/utils/validation";
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
      const numericValue = value === "" ? undefined : Number(value);
      setField(fieldName as keyof PrepaidCardFormData, numericValue);
    } else {
      setField(fieldName as keyof PrepaidCardFormData, value);
    }
  };

  return (
    <div
      className="page-content-wrapper"
      style={{ maxWidth: "350px", margin: "0 auto", padding: "20px" }}
    >
      <h2 style={{ textAlign: "center" }}>Udfyld Credits</h2>

      <DynamicForm
        fields={fields}
        formData={formData}
        onChange={handleChange}
        fieldStyles={{
          pricePerTreatment: {
            border:
              !isPositiveNumber(formData.pricePerTreatment) &&
              !isPositiveNumber(formData.treatmentCount)
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
          disabled={
            !isPositiveNumber(formData.pricePerTreatment) &&
            !isPositiveNumber(formData.treatmentCount)
          }
          type="button"
          onClick={onNext}
        >
          Næste
        </button>
      </div>
    </div>
  );
};

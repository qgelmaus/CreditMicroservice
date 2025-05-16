// FillGiftAccountDetailsPage.tsx
import { DynamicForm } from "../../../../components/DynamicForm";
import type { GiftCardFormData } from "../../../../types/CreditAccount";

const fields = [{ name: "credits", label: "Antal Credits", type: "number" }];

type FillGiftAccountDetailsPageProps = {
  formData: GiftCardFormData;
  setField: <K extends keyof GiftCardFormData>(
    field: K,
    value: GiftCardFormData[K],
  ) => void;
  onNext: () => void;
  onBack: () => void;
};

export const FillGiftAccountDetailsPage = ({
  formData,
  setField,
  onNext,
  onBack,
}: FillGiftAccountDetailsPageProps) => {
  const handleChange = (fieldName: string, value: any) => {
    const field = fields.find((f) => f.name === fieldName);
    if (field?.type === "number") {
      const numericValue = value === "" ? undefined : Number(value);
      setField(fieldName as keyof GiftCardFormData, numericValue);
    } else {
      setField(fieldName as keyof GiftCardFormData, value);
    }
  };

  const isValidCredits = (credits: number | undefined): boolean => {
    return typeof credits === "number" && credits > 0;
  };
  console.log("formData.credits:", formData.credits, typeof formData.credits);

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
          credits: {
            border: !isValidCredits(formData.credits)
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
          disabled={!isValidCredits(formData.credits)}
        >
          Næste
        </button>
      </div>
    </div>
  );
};

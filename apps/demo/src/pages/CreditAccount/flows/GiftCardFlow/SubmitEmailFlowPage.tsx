import { useEffect, useState } from "react";
import { DynamicForm } from "../../../../components/DynamicForm";
import type { GiftCardFormData } from "../../../../types/CreditAccount";
import { isValidEmail } from "src/utils/validation";

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
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    setEmailValid(isValidEmail(formData.email || ""));
  }, [formData.email]);

  const handleChange = (fieldName: string, value: any) => {
    setField(fieldName as keyof GiftCardFormData, value);
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

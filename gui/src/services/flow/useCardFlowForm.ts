import { useState } from "react";
import type {
  GiftCardFormData,
  PrepaidCardFormData,
} from "../../types/CreditAccount";

// Din formData-type

export const useGiftCardFlowForm = () => {
  const [formData, setFormData] = useState<GiftCardFormData>({
    type: "GIFT_CARD",
    email: "",
  });

  // Funktion til at opdatere ét felt
  const setField = <K extends keyof GiftCardFormData>(
    field: K,
    value: GiftCardFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    formData,
    setFormData, // stadig mulighed for at sætte hele formData hvis nødvendigt
    setField,
  };
};

export const usePrepiadCardFlowForm = () => {
  const [formData, setFormData] = useState<PrepaidCardFormData>({
    type: "PREPAID_CARD",
    email: "",
    pricePerTreatment: 0,
    treatmentCount: 0,
  });

  // Funktion til at opdatere ét felt
  const setField = <K extends keyof PrepaidCardFormData>(
    field: K,
    value: PrepaidCardFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    formData,
    setFormData, // stadig mulighed for at sætte hele formData hvis nødvendigt
    setField,
  };
};

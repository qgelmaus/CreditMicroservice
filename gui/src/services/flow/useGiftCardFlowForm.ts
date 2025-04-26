import { useState } from "react";

// Din formData-type
export type GiftCardFormData = {
  email: string;
  type: "GIFT_CARD";
  credits?: number;
};

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

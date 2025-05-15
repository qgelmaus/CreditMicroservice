export type CreateAndCompleteInput = {
  email: string;
  type: "GIFT_CARD" | "PREPAID_CARD";
  treatmentCount?: number;
  pricePerTreatment?: number;
  purchaseAmount?: number;
  paymentMethod: "STRIPE" | "MOBILEPAY";
};

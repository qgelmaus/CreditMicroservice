export type CreatePaymentDetailsInput = {
  email: string;
  purchaseAmount?: number;
  pricePerTreatment?: number;
  treatmentCount?: number;
  paymentMethod: "STRIPE" | "MOBILEPAY";
  reference: string;
};

export type PaymentDetails = {
  id: string;
  paymentStatus: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
  reference: string;
};

export type CreatePaymentResponse = {
  data: {
    createPayment: PaymentDetails;
  };
};

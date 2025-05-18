"use client";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT_AND_PAYMENT_MUTATION } from "../../../repository/mutations/createAccountWithPayment";

interface CreateAndCompleteInput {
  email: string;
  type: "GIFT_CARD" | "PREPAID_CARD";
  treatmentCount?: number;
  pricePerTreatment?: number;
  purchaseAmount: number;
  paymentMethod: "STRIPE" | "MOBILEPAY";
}

export const useCreateAndCompleteAccount = () => {
  const [mutate, { data, loading, error }] = useMutation(
    CREATE_ACCOUNT_AND_PAYMENT_MUTATION
  );

  const createAndComplete = async (input: CreateAndCompleteInput) => {
    try {
      const result = await mutate({ variables: { input } });
      return result.data?.createCreditAccountAndCompletePayment;
    } catch (err) {
      console.error("Fejl i mutation:", err);
      throw err; // lad evt. en komponent vise en toast eller lign.
    }
  };

  return {
    createAndComplete,
    data,
    loading,
    error,
  };
};

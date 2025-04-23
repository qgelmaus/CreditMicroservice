
import { gql, useMutation } from "@apollo/client";

const CREATE_GIFT_ACCOUNT = gql`
  mutation CreateGiftAccount($input: CreateGiftAccountInput!) {
    createGiftAccount(input: $input) {
      creditCode
    }
  }
`;

const CREATE_PREPAID_ACCOUNT = gql`
  mutation CreatePrepaidAccount($input: CreatePrepaidAccountInput!) {
    createPrepaidAccount(input: $input) {
      creditCode
    }
  }
`;

// TypeScript typer
interface CreateGiftAccountInput {
  input: {
    email: string;
    purchaseAmount: number;
  };
}

interface CreatePrepaidAccountInput {
  input: {
    email: string;
    treatmentCount: number;
    pricePerTreatment: number;
  };
}

interface CreateGiftAccountResponse {
  createGiftAccount: { creditCode: string };
}

interface CreatePrepaidAccountResponse {
  createPrepaidAccount: { creditCode: string };
}

// Hooks
export function useCreateGiftAccount() {
  return useMutation<CreateGiftAccountResponse, CreateGiftAccountInput>(CREATE_GIFT_ACCOUNT);
}

export function useCreatePrepaidAccount() {
  return useMutation<CreatePrepaidAccountResponse, CreatePrepaidAccountInput>(CREATE_PREPAID_ACCOUNT);
}

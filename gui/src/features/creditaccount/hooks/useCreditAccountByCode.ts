import { useQuery, gql } from "@apollo/client";

export interface Transaction {
  id: number;
  type: string;
  credits: number;
  money: number;
  createdAt: string;
}

interface BaseAccount {
  creditCode: string;
  availableCredits: number;
  originalMoney: number;
  transactions: Transaction[];
  __typename: "GiftAccount" | "PrepaidAccount";
}

export interface GiftAccount extends BaseAccount {
  __typename: "GiftAccount";
  type: "GIFT_CARD";
}

export interface PrepaidAccount extends BaseAccount {
  __typename: "PrepaidAccount";
  type: "PREPAID_CARD";
  treatmentCount: number;
  discountPercentage: number;
}

export type CreditAccount = GiftAccount | PrepaidAccount;

interface CreditAccountByCodeData {
  creditAccountByCode: CreditAccount;
}

interface CreditAccountByCodeVars {
  code: string;
}

const GET_ACCOUNT = gql`
  query CreditAccountByCode($code: String!) {
    creditAccountByCode(code: $code) {
      creditCode
      availableCredits
      originalMoney
      transactions {
        id
        type
        credits
        money
        createdAt
      }

      __typename

      ... on GiftAccount {
        type
      }

      ... on PrepaidAccount {
        type
        treatmentCount
        discountPercentage
      }
    }
  }
`;

export function useCreditAccountByCode(code: string) {
  return useQuery<CreditAccountByCodeData, CreditAccountByCodeVars>(
    GET_ACCOUNT,
    {
      variables: { code },
      skip: !code,
    }
  );
}

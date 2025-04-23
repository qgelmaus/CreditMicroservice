import { useQuery, gql } from "@apollo/client";

export interface Transaction {
  id: number;
  type: string;
  credits: number;
  money: number;
  createdAt: string;
}

export interface CreditAccount {
  creditCode: string;
  availableCredits: number;
  originalMoney: number;
  transactions: Transaction[];
}

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
    }
  }
`;

export function useCreditAccountByCode(code: string) {
  return useQuery<CreditAccountByCodeData, CreditAccountByCodeVars>(GET_ACCOUNT, {
    variables: { code },
    skip: !code,
  });
}
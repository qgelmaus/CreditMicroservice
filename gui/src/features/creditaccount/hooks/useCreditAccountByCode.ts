import { useQuery, gql } from "@apollo/client";

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
      }
    }
  }
`;

export function useCreditAccountByCode(code: string) {
  return useQuery(GET_ACCOUNT, {
    variables: { code },
    skip: !code,
  });
}

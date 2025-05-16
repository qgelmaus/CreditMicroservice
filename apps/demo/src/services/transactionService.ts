import { gql } from "@apollo/client";

export const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
    allCreditTransactions {
      id
      type
      credits
      money
      note
      createdAt
      creditCode
    }
  }
`;

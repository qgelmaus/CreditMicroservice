// src/services/accountService.ts
import { gql } from "@apollo/client";

export const GET_ALL_ACCOUNTS = gql`
  query GetAllAccounts {
    allCreditAccounts {
      creditCode
      type
      originalCredits
      originalMoney
      availableCredits
      availableMoney
      email
      isActive
      createdAt
      expiresAt
      transactions {
        id
        type
        credits
        money
        note
        createdAt
        creditCode
      }
      ... on PrepaidAccount {
        treatmentCount
        discountPercentage
      }
    }
  }
`;

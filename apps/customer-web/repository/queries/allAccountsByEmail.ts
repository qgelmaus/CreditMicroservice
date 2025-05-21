import { gql, useMutation } from "@apollo/client";

export const ALL_ACCOUNTS_BY_EMAIL = gql(`
    query creditAccountByEmail($email: String!) {
  creditAccountByEmail(email: $email) {
    creditCode
    availableCredits
    availableMoney
    expiresAt
    isActive
  }
}
  `);

import { gql, useMutation } from "@apollo/client";

export const CREATE_ACCOUNT_AND_PAYMENT_MUTATION = gql(`
    mutation CreateCreditAccountAndCompletePayment($input: CreateAndCompleteInput!) {
      createCreditAccountAndCompletePayment(input: $input) {
        creditAccount {
          creditCode
          isActive
        }
        paymentDetails {
          id
          email
          stripeUrl
        }
      }
    }
  `);

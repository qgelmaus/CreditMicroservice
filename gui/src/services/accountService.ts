// src/services/accountService.ts
import { gql } from "@apollo/client";

export interface Transaction {
  id: number;
  credits: number;
  money: number;
  createdAt: string;
  type: string;
}

export interface BaseCreditAccount {
  creditCode: string;
  type: "GIFT_CARD" | "PREPAID_CARD"; // eller importér din enum
  originalCredits: number;
  originalMoney: number;
  availableCredits: number;
  availableMoney: number;
  email: string;
  isActive: boolean;
  createdAt: string;
  expiresAt: string;
  transactions: Transaction[];
}

export interface GiftAccount extends BaseCreditAccount {
  type: "GIFT_CARD";
}

export interface PrepaidAccount extends BaseCreditAccount {
  type: "PREPAID_CARD";
  treatmentCount: number;
  discountPercentage: number;
}

export type CreditAccount = GiftAccount | PrepaidAccount;

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

export const GET_ACCOUNT_BY_CODE = gql`
  query creditAccountByCode($code: String!) {
    creditAccountByCode(code: $code) {
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

const CREDIT_ACCOUNT_FIELDS = gql`
  fragment CreditAccountFields on CreditAccount {
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
      credits
      money
      createdAt
      type
    }
    ... on PrepaidAccount {
      treatmentCount
      discountPercentage
    }
  }
`;

export const USE_CREDITS = gql`
  mutation UseCredits($input: UseCreditsInput!) {
    useCredits(input: $input) {
      ...CreditAccountFields
    }
  }
  ${CREDIT_ACCOUNT_FIELDS}
`;

export const REFUND_CREDITS = gql`
  mutation RefundCredits($input: RefundCreditsInput!) {
    refundCredits(input: $input) {
      ...CreditAccountFields
    }
  }
  ${CREDIT_ACCOUNT_FIELDS}
`;

export const REFUND_MONEY = gql`
  mutation RefundMoney($input: RefundMoneyInput!) {
    refundMoney(input: $input) {
      ...CreditAccountFields
    }
  }
  ${CREDIT_ACCOUNT_FIELDS}
`;

export const TRANSFER_CREDITS = gql`
  mutation TransferCredits($input: TransferCreditsInput!) {
    transferCredits(input: $input) {
      ...CreditAccountFields
    }
  }
  ${CREDIT_ACCOUNT_FIELDS}
`;

export const NULLIFY_ACCOUNT = gql`
  mutation NullifyAccount($input: NullifyAccountInput!) {
    nullifyAccount(input: $input) {
      ...CreditAccountFields
    }
  }
  ${CREDIT_ACCOUNT_FIELDS}
`;

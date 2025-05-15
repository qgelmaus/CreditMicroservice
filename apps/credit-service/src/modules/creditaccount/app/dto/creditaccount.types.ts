import type {
  CreditAccountType,
  TransactionType,
} from "apps/credit-service/src/prisma/generated/client/index.js";
import type { Credits } from "../../domain/valueobjects/Credits.ts";
import type { Money } from "../../domain/valueobjects/Money.ts";

export interface CreditAccountDTO {
  id: number;
  creditCode: string;
  type: CreditAccountType;
  originalCredits: number;
  originalMoney: number;
  availableCredits: number;
  availableMoney: number;
  email: string;
  isActive: boolean;
  createdAt: Date;
  expiresAt: Date;
  treatmentCount?: number;
  discountPercentage?: number;
  transactions?: TransactionDTO[];
  paymentReference?: string;
}

export interface IUpdateAccount {
  credits: Credits;
  money: Money;
}

export interface CreditTransferDTO {
  fromTransactionId: number;
  toTransactionId: number;
  amount: number;
  createdAt: Date;
}

export interface TransactionDTO {
  id: number;
  type: TransactionType;
  credits: number;
  money: number;
  note?: string;
  createdAt: Date;
  creditCode: string;
}

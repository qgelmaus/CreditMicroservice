import type {
  CreditTransaction,
  CreditTransfer,
  CreditAccount as PrismaAccount,
} from "@prisma/client";
import { Credits } from "../../domain/valueobjects/Credits";
import { Money } from "../../domain/valueobjects/Money";
import {
  type CreditAccount,
  GiftAccount,
  PrepaidAccount,
} from "../../domain/CreditAccount";
import type {
  CreditAccountDTO,
  CreditTransferDTO,
} from "../../app/dto/creditaccount.types";
import { toTransactionDTO } from "./transaction.mapper";

export function toDomain(
  account: PrismaAccount & { transactions?: CreditTransaction[] }
) {
  const originalCredits = new Credits(account.originalCredits);
  const originalMoney = new Money(account.originalMoney);
  const availableCredits = new Credits(account.availableCredits);
  const availableMoney = new Money(account.availableMoney);
  const transactions = account.transactions ?? [];

  if (account.type === "GIFT_CARD") {
    return new GiftAccount(
      account.id,
      account.creditCode,
      originalCredits,
      originalMoney,
      availableCredits,
      availableMoney,
      account.email,
      account.isActive,
      account.createdAt,
      account.expiresAt,
      transactions
    );
  }

  if (account.type === "PREPAID_CARD") {
    return new PrepaidAccount(
      account.id,
      account.creditCode,
      originalCredits,
      originalMoney,
      availableCredits,
      availableMoney,
      account.email,
      account.isActive,
      account.createdAt,
      account.expiresAt,
      account.treatmentCount ?? 0,
      account.discountPercentage ?? 0,
      transactions
    );
  }

  throw new Error("Unknown account type");
}

export function toDTO(account: CreditAccount): CreditAccountDTO {
  const base: CreditAccountDTO = {
    id: account.id,
    creditCode: account.creditCode,
    type: account.type,
    originalCredits: account.originalCredits.value,
    originalMoney: account.originalMoney.amount,
    availableCredits: account.availableCredits,
    availableMoney: account.availableMoney,
    email: account.email,
    isActive: account.isActive,
    createdAt: account.createdAt,
    expiresAt: account.expiresAt,
    transactions: account.transactions.map(toTransactionDTO) ?? [],
  };

  if (account instanceof PrepaidAccount) {
    return {
      ...base,
      treatmentCount: account.treatmentCount,
      discountPercentage: account.discountPercentage,
    };
  }

  return base;
}

export function toTransferDTO(entity: CreditTransfer): CreditTransferDTO {
  return {
    fromTransactionId: entity.fromTransactionId,
    toTransactionId: entity.toTransactionId,
    amount: entity.amount,
    createdAt: entity.createdAt,
  };
}

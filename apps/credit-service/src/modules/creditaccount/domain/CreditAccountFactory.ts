import { Money } from "./valueobjects/Money.ts";
import { Credits } from "./valueobjects/Credits.ts";

import { GiftAccount, PrepaidAccount } from "./CreditAccount.ts";

import { generateDateExpired } from "../../../utils/Generators/expirationDateGenerator.ts";
import { generateCreditCode } from "../../../utils/Generators/creditCodeGenerator.ts";
import { CreditAccountType } from "apps/credit-service/src/prisma/generated/client/index.js";

type NewGiftInput = {
  type: "GIFT_CARD";
  email: string;
  originalAmount: number;
};

type NewPrepaidInput = {
  type: "PREPAID_CARD";
  email: string;
  pricePerTreatment: number;
  treatmentCount: number;
};

export type NewCreditAccountInput = NewGiftInput | NewPrepaidInput;

export function createNewCreditAccount(
  input: NewCreditAccountInput
): GiftAccount | PrepaidAccount {
  const now = new Date();
  const expires = generateDateExpired();
  const code = generateCreditCode();

  if (input.type === CreditAccountType.GIFT_CARD) {
    const credits = new Credits(input.originalAmount);
    const money = new Money(input.originalAmount);
    return new GiftAccount(
      0,
      code,
      credits,
      money,
      credits,
      money,
      input.email,
      false,
      now,
      expires,
      []
    );
  }

  if (input.type === CreditAccountType.PREPAID_CARD) {
    const credits = new Credits(input.pricePerTreatment * input.treatmentCount);
    const totalPrice =
      input.treatmentCount === 5 ? credits.value * 0.88 : credits.value * 0.84;
    const discountPercentage = input.treatmentCount === 5 ? 12 : 16;

    const money = new Money(totalPrice);

    return new PrepaidAccount(
      0,
      code,
      credits,
      money,
      credits,
      money,
      input.email,
      false,
      now,
      expires,
      input.treatmentCount,
      discountPercentage,
      []
    );
  }

  throw new Error("Unknown CreditAccountType");
}

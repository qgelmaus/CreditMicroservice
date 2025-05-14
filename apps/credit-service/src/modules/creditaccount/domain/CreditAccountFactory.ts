import { Money } from "./valueobjects/Money";
import { Credits } from "./valueobjects/Credits";

import { GiftAccount, PrepaidAccount } from "./CreditAccount";
import { CreditAccountType } from "@prisma/client";
import { generateDateExpired } from "../../../utils/Generators/expirationDateGenerator";
import { generateCreditCode } from "../../../utils/Generators/creditCodeGenerator";

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
      true,
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
      true,
      now,
      expires,
      input.treatmentCount,
      discountPercentage,
      []
    );
  }

  throw new Error("Unknown CreditAccountType");
}

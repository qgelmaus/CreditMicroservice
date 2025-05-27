export enum CreditAccountTypeEnum {
  GIFT_CARD = "GIFT_CARD",
  PREPAID_CARD = "PREPAID_CARD",
}

type NewGiftInput = {
  type: CreditAccountTypeEnum.GIFT_CARD;
  email: string;
  purchaseAmount: number;
};

type NewPrepaidInput = {
  type: CreditAccountTypeEnum.PREPAID_CARD;
  email: string;
  pricePerTreatment: number;
  treatmentCount: number;
};

export type NewCreditAccountInput = NewGiftInput | NewPrepaidInput;

export type CreateCreditAccountInput = {
  email: string;
  type: "GIFT_CARD" | "PREPAID_CARD";
  treatmentCount?: number;
  pricePerTreatment?: number;
  purchaseAmount?: number;
};

export type CreditAccount = {
  creditCode: string;
  email: string;
  originalMoney: number;
};

export type CreateAccountResponse = {
  data: {
    createCreditAccount: CreditAccount;
  };
};

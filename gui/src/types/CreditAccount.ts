export type Transaction = {
  id: number;
  credits: number;
  money: number;
  createdAt: string;
};

export type CreditAccountBase = {
  creditCode: string;
  type: "GIFT_CARD" | "PREPAID_CARD";
  originalCredits: number;
  originalMoney: number;
  availableCredits: number;
  availableMoney: number;
  email: string;
  isActive: boolean;
  dateCreated: string;
  dateExpired: string;
  transactions: Transaction[];
};

export type GiftAccount = CreditAccountBase & {
  type: "GIFT_CARD";
};

export type PrepaidAccount = CreditAccountBase & {
  type: "PREPAID_CARD";
  treatmentCount: number;
  discountPercentage: number;
};

export type CreditAccount = GiftAccount | PrepaidAccount;

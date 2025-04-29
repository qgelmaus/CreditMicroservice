export interface Transaction {
  id: number;
  credits: number;
  money: number;
  createdAt: string;
  type: string;
  note: string
  creditCode: string;
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

export type GiftAccount = BaseCreditAccount & {
  type: "GIFT_CARD";
};

export type PrepaidAccount = BaseCreditAccount & {
  type: "PREPAID_CARD";
  treatmentCount: number;
  discountPercentage: number;
};

export type CreditAccount = GiftAccount | PrepaidAccount;

export type GiftCardFormData = {
  email: string;
  type: "GIFT_CARD";
  credits?: number;
};

export type PrepaidCardFormData = {
  email: string;
  type: "PREPAID_CARD";
  pricePerTreatment?: number;
  treatmentCount?: number;
};





}

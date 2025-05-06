import type { CreditAccountType, PaymentMethod } from "@prisma/client";

export interface CreateCreditAccountWithPaymentInput {
  accountData: {
    type: CreditAccountType;
    email: string;
    treatmentCount?: number;
    pricePerTreatment?: number;
    purchaseAmount?: number;
  };
  paymentData: {
    amountMoney: number;
    paymentMethod: PaymentMethod;
    reference: string;
  };
}

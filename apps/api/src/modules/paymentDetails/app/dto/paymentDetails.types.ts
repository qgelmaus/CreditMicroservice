import type { PaymentMethod, PaymentStatus } from "@prisma/client";
import type { CreditAccount } from "../../../creditaccount/domain/CreditAccount";

export interface PaymentDetailsDTO {
  id: string;
  creditAccount: CreditAccount | number;
  amountMoney: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentDate: Date;
  reference: string;
}

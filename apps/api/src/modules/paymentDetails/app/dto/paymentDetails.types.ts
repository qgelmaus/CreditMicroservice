import type { PaymentMethod, PaymentStatus } from "@prisma/client";

export interface PaymentDetailsDTO {
  id: string;
  creditAccountId: number;
  amountMoney: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentDate: Date;
  reference: string;
}

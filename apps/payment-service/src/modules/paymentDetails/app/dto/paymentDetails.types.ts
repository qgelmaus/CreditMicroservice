import type { PaymentMethod, PaymentStatus } from "@prisma/client";

export interface PaymentDetailsDTO {
  id: string;
  email: string;
  amountMoney: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentDate: Date;
  reference: string;
  createdAt: Date;
}

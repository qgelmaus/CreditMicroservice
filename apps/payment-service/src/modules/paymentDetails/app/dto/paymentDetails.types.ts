import type {
  PaymentMethod,
  PaymentStatus,
} from "apps/payment-service/src/prisma/generated/client/index.js";

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

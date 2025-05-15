import type {
  PaymentMethod,
  PaymentStatus,
} from "apps/payment-service/src/prisma/generated/client/index.js";
import { PaymentDetails } from "./PaymentDetails.ts";

export interface CreatePaymentDetailsFactoryInput {
  email: string;
  purchaseAmount: number;
  paymentMethod: PaymentMethod;
  reference: string;
}

// biome-ignore lint/complexity/noStaticOnlyClass: This is a DDD exception
export class PaymentDetailsFactory {
  static createNew(input: CreatePaymentDetailsFactoryInput): PaymentDetails {
    return PaymentDetails.create({
      email: input.email,
      amountMoney: input.purchaseAmount,
      paymentMethod: input.paymentMethod,
      reference: input.reference,
    });
  }

  static restoreFromPersistence(data: {
    id: string;
    email: string;
    amountMoney: number;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    reference: string;
    paymentDate: Date;
    createdAt?: Date;
  }): PaymentDetails {
    return PaymentDetails.restore(data);
  }
}

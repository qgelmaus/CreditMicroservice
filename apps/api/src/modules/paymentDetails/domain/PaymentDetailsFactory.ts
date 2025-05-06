import { type PaymentMethod, PaymentStatus } from "@prisma/client";
import { PaymentDetails } from "./PaymentDetails";
import { Money } from "../../creditaccount/domain/valueobjects/Money";

export interface CreatePaymentDetailsFactoryInput {
  creditAccountId: number;
  amountMoney: number;
  paymentMethod: PaymentMethod;
  reference: string;
}

// biome-ignore lint/complexity/noStaticOnlyClass: This is a DDD exception
export class PaymentDetailsFactory {
  static createNew(input: CreatePaymentDetailsFactoryInput): PaymentDetails {
    const amount = new Money(input.amountMoney);

    return PaymentDetails.create({
      creditAccountId: input.creditAccountId,
      amountMoney: amount,
      paymentMethod: input.paymentMethod,
      paymentStatus: PaymentStatus.PENDING,
      reference: input.reference,
    });
  }

  static restoreFromPersistence(data: {
    id: string;
    creditAccountId: number;
    amountMoney: number;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    reference: string;
    paymentDate: Date;
  }): PaymentDetails {
    return PaymentDetails.restore(data);
  }
}

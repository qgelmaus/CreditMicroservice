import type { PaymentDetails as PrismaPayment } from "apps/payment-service/src/prisma/generated/client/index.js";
import { PaymentDetails } from "../../domain/PaymentDetails.ts";

import type { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types.ts";

export function toDomain(paymentDetails: PrismaPayment): PaymentDetails {
  return PaymentDetails.restore({
    id: paymentDetails.id,
    email: paymentDetails.email,
    amountMoney: paymentDetails.amountMoney,
    paymentMethod: paymentDetails.paymentMethod,
    paymentStatus: paymentDetails.paymentStatus,
    reference: paymentDetails.reference,
    paymentDate: paymentDetails.paymentDate,
    createdAt: paymentDetails.createdAt,
  });
}

export function toDTO(paymentDetails: PaymentDetails): PaymentDetailsDTO {
  const id = (paymentDetails as any).id;
  const createdAt = (paymentDetails as any).createdAt;

  if (!id || !createdAt) {
    throw new Error("Cannot convert to DTO without id and createdAt");
  }

  return {
    id,
    email: (paymentDetails as any).email,
    amountMoney: (paymentDetails as any).amountMoney,
    paymentMethod: (paymentDetails as any).paymentMethod,
    paymentStatus: (paymentDetails as any).paymentStatus,
    paymentDate: (paymentDetails as any).paymentDate,
    reference: (paymentDetails as any).reference,
    createdAt,
  };
}

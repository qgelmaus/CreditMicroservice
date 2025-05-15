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

export function toDTO(domain: PaymentDetails): PaymentDetailsDTO {
  return domain.toDTO();
}

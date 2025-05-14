import type { PaymentDetails as PrismaPayment } from "@prisma/client";
import { PaymentDetails } from "../../domain/PaymentDetails";

import type { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types";

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

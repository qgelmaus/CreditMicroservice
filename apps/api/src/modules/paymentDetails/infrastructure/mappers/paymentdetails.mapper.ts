import type { PaymentDetails as PrismaPayment } from "@prisma/client";
import { PaymentDetails } from "../../domain/PaymentDetails";

import type { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types";

export function toDomain(paymentDetails: PrismaPayment): PaymentDetails {
  return PaymentDetails.restore({
    id: paymentDetails.id,
    creditAccountId: paymentDetails.creditAccountId,
    amountMoney: paymentDetails.amountMoney,
    paymentMethod: paymentDetails.paymentMethod,
    paymentStatus: paymentDetails.paymentStatus,
    reference: paymentDetails.reference,
    paymentDate: paymentDetails.paymentDate,
  });
}

export function toDTO(domain: PaymentDetails): PaymentDetailsDTO {
  return domain.toDTO();
}

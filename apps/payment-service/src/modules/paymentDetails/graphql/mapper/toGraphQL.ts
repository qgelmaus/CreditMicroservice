import type { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types.ts";
import type {
  PaymentDetails,
  PaymentStatus,
  PaymentMethod,
} from "../../../../shared/types/codegen.types.ts";

export function mapToGraphQL(dto: PaymentDetailsDTO): PaymentDetails {
  return {
    id: dto.id,
    email: dto.email,
    amountMoney: dto.amountMoney,
    paymentMethod: dto.paymentMethod as PaymentMethod,
    paymentDate: dto.paymentDate,
    reference: dto.reference,
    paymentStatus: dto.paymentStatus as PaymentStatus,
    createdAt: dto.createdAt,
    stripeUrl: dto.stripeUrl,
  };
}

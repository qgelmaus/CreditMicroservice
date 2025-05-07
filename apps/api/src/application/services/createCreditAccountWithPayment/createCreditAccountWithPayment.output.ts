import type { CreditAccountDTO } from "../../../modules/creditaccount/app/dto/creditaccount.types";
import type { PaymentDetailsDTO } from "../../../modules/paymentDetails/app/dto/paymentDetails.types";

export interface CreateCreditAccountWithPaymentOutput {
  creditAccount: CreditAccountDTO;
  paymentDetails: PaymentDetailsDTO;
}

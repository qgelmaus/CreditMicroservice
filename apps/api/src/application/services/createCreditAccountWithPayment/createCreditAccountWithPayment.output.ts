import type { CreditAccountDTO } from "../../../modules/creditaccount/app/dto/creditaccount.types";
import type { PaymentDetailsDTO } from "../../../modules/paymentDetails/app/dto/paymentDetails.types";
import type { GiftAccount, PrepaidAccount } from "apps/api/src/shared/types/codegen.types";

export interface CreateCreditAccountWithPaymentOutput {
  creditAccount: CreditAccountDTO;
  paymentDetails: PaymentDetailsDTO;
}

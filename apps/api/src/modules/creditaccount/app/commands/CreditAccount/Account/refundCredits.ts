import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const refundCredits: MutationResolvers['refundCredits'] = async(_parent, { input }, context) => {
  const {creditCode, cost, note} = input ?? {};
  return await context.service.refundCredits(creditCode, cost,  note)
}
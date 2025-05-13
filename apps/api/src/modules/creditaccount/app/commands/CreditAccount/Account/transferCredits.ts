import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const transferCredits: MutationResolvers['transferCredits'] = async(_parent, { input }, context) => {
  const { fromCreditCode, toCreditCode, amount, note} = input ?? {};
  return await context.service.transferCredits(fromCreditCode, toCreditCode, amount,  note)
}


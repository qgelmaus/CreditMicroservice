import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const useCredits: MutationResolvers['useCredits'] = async(_parent, { input }, context) => {
  const {creditCode, cost, note} = input ?? {};
  return await context.service.useCredits(creditCode, cost,  note)
}


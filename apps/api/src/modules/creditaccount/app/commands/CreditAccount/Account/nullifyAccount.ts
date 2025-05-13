import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";
import { CreditAccountService } from "../../../services/creditAccount.service";




export const nullifyAccount: MutationResolvers['nullifyAccount'] = async(_parent, { input }, context) => {
  const {creditCode, note} = input ?? {};
  return await context.service.nullifyAccount(creditCode, note)
}
import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const refundMoney: MutationResolvers['refundMoney'] = async(_parent, { input }, context) => {
  try{
  const {creditCode, money, note} = input ?? {};
  return await context.services.creditAccount.refundMoney(creditCode, money,  note)
} catch (err) {
  throw err;
}
}


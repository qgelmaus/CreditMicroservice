import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const refundMoney: MutationResolvers['refundMoney'] = async(_parent, { input }, context) => {
  const {creditCode, money, note} = input ?? {};
  return await context.service.refundMoney(creditCode, money,  note)
}


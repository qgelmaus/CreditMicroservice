import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const transferCredits: MutationResolvers['transferCredits'] = async(_parent, { input }, context) => {
  try{
  const { fromCreditCode, toCreditCode, amount, note} = input ?? {};
  return await context.services.creditAccount.transferCredits(fromCreditCode, toCreditCode, amount,  note)
} catch (err) {
  console.error("useCredits error:", err);
  throw err;
}}


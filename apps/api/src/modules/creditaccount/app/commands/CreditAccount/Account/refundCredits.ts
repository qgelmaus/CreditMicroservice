import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const refundCredits: MutationResolvers['refundCredits'] = async(_parent, { input }, context) => {
  try{
  const {creditCode, cost, note} = input ?? {};
  return await context.services.creditAccount.refundCredits(creditCode, cost,  note)
 }  catch (err) {
  console.error("useCredits error:", err);
  throw err;
}}
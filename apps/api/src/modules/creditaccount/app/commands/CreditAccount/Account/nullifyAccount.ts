import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";




export const nullifyAccount: MutationResolvers['nullifyAccount'] = async(_parent, { input }, context) => {
  try{
  const {creditCode, note} = input ?? {};
  return await context.services.creditAccount.nullifyAccount(creditCode, note)
}  catch (err) {
  throw err;
}}
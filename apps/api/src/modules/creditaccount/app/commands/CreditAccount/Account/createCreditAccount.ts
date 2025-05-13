import { CreditAccountService } from "../../../services/creditAccount.service";
import { Resolvers, MutationResolvers } from "../../../../../../shared/types/codegen.types"





export const createGiftAccount: MutationResolvers['createGiftAccount'] = async (_parent, args, context) => {
  const { input } = args

  return await context.services.creditAccount.createGiftAccount(
    input.purchaseAmount,
    input.email
  )
}




export const createPrepaidAccount: MutationResolvers['createPrepaidAccount'] = async (
  _parent,
  args,
  context
) => {
  const { input } = args;

  return await context.services.creditAccount.createPrepaidAccount(
    input.treatmentCount,
    input.pricePerTreatment,
    input.email
  );
};

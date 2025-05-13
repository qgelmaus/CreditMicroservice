import {MutationResolvers } from "../../../../../../shared/types/codegen.types"


export const createGiftAccount: MutationResolvers['createGiftAccount'] = async (_parent, args, context) => {
  const { input } = args

  return await context.services.creditAccount.createGiftAccount(
    input.purchaseAmount,
    input.email
  )
}
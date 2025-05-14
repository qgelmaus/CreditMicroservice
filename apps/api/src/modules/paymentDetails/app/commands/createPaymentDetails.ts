import type { MutationResolvers } from "../../../../shared/types/codegen.types";

export const createPaymentDetails: MutationResolvers["createPaymentDetails"] = async (
  _parent,
  { input },
  context
) => {
  return await context.services.payment.create(input);
};

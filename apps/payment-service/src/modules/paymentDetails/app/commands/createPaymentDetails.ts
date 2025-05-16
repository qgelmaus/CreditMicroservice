import type { MutationResolvers } from "../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../graphql/mapper/toGraphQL.ts";

export const createPayment: MutationResolvers["createPayment"] = async (
  _parent,
  args,
  context
) => {
  const { input } = args;

  const payment = await context.paymentDetailsService.create({
    email: input.email,
    purchaseAmount: input.purchaseAmount,
    paymentMethod: input.method,
    reference: input.reference,
  });

  return mapToGraphQL(payment);
};

import type { MutationResolvers } from "../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../graphql/mapper/toGraphQL";

export const createPayment: MutationResolvers["createPayment"] = async (
  _parent,
  { input },
  context
) => {
  const payment = await context.paymentDetailsService.create({
    email: input.email,
    amountMoney: input.amountMoney,
    paymentMethod: input.method,
    reference: input.reference,
  });
  return mapToGraphQL(payment);
};

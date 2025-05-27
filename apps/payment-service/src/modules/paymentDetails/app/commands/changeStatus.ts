import { MutationResolvers } from "apps/payment-service/src/shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../graphql/mapper/toGraphQL.ts";

export const changeStatus: MutationResolvers["changeStatus"] = async (
  _parent,
  args,
  context,
) => {
  const { id, status } = args.input;

  const updated = await context.paymentDetailsService.changePaymentStatus(
    id,
    status,
  );

  return mapToGraphQL(updated);
};

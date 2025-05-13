import { deleteFlow as service } from "../../services/creditAccountCustomerFlow.service";
import type { Context } from "apps/api/src/graphql/buildContext";

export const cancelCreditAccountFlow = async (
  _: unknown,
  __: unknown,
  context: Context
) => {
  service(context.user.id);
  return true;
};

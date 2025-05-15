import type { Context } from "../../../../../context/buildContext.ts";
import { deleteFlow as service } from "../../services/creditAccountCustomerFlow.service.ts";

export const cancelCreditAccountFlow = async (
  _: unknown,
  __: unknown,
  context: Context
) => {
  service(context.user.id);
  return true;
};

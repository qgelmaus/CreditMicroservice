import type { Context } from "../../../../../context/buildContext";
import { deleteFlow as service } from "../../services/creditAccountCustomerFlow.service";

export const cancelCreditAccountFlow = async (
  _: unknown,
  __: unknown,
  context: Context
) => {
  service(context.user.id);
  return true;
};

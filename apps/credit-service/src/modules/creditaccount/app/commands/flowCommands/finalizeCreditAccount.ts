import type { Context } from "../../../../../context/buildContext";
import { finalizeCreditAccount as service } from "../../services/creditAccountCustomerFlow.service";

export const finalizeCreditAccount = async (
  _: any,
  __: any,
  context: Context
) => {
  const result = await service(context.user.id, context.creditAccountService);
  return result;
};

import type { Context } from "../../../../../context/buildContext.ts";
import { finalizeCreditAccount as service } from "../../services/creditAccountCustomerFlow.service.ts";

export const finalizeCreditAccount = async (
  _: any,
  __: any,
  context: Context
) => {
  const result = await service(context.user.id, context.creditAccountService);
  return result;
};

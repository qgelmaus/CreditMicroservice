import type { Context } from "../../../../../context/buildContext.ts";
import { validateCreditAccount as service } from "../../services/creditAccountCustomerFlow.service.ts";

export const validateCreditAccount = async (
  _: unknown,
  __: unknown,
  context: Context
) => {
  await service(context.user.id, context.creditAccountService);
  return true;
};

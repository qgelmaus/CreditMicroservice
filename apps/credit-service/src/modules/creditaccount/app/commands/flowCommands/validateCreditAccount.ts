import type { Context } from "../../../../../context/buildContext";
import { validateCreditAccount as service } from "../../services/creditAccountCustomerFlow.service";

export const validateCreditAccount = async (
  _: unknown,
  __: unknown,
  context: Context,
) => {
  await service(context.user.id, context.creditAccountService);
  return true;
};

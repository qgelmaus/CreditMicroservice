import { validateCreditAccount as service } from "../../services/creditAccountCustomerFlow.service";
import type { Context } from "../../../../../graphql/buildContext"; // hvis du har typed context

export const validateCreditAccount = async (
  _: unknown,
  __: unknown,
  context: Context
) => {
  await service(context.user.id, context.services.creditAccount);
  return true;
};

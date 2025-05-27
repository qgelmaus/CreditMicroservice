import type { Context } from "../../../../../context/buildContext.ts";
import { submitCreditAccountDetails as service } from "../../../app/services/creditAccountCustomerFlow.service.ts";

export const submitCreditAccountDetails = async (
  _: unknown,
  args: { details: Record<string, any> },
  context: Context,
) => {
  await service(context.user.id, args.details);
  return true;
};

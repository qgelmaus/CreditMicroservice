import type { Context } from "../../../../../context/buildContext.ts";
import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service.ts";

export const setCreditAccountEmail = async (
  _: unknown,
  args: { email: string },
  context: Context,
) => {
  await service(context.user.id, args.email);
  return true;
};

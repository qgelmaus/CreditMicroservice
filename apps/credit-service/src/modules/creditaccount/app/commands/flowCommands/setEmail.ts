import type { Context } from "../../../../../context/buildContext";
import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service";

export const setCreditAccountEmail = async (
  _: unknown,
  args: { email: string },
  context: Context
) => {
  await service(context.user.id, args.email);
  return true;
};

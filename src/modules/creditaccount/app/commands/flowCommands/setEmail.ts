import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service";

export const setCreditAccountEmail = async (
  _: any,
  args: { email: string },
  context: { user: { id: string } }
) => {
  await service(context.user.id, args.email);
  return true;
};

import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service";

export const setCreditAccountEmail = async (
  _: any,
  args: { email: string },
  context: { user: { id: string } }
) => {
  const { email } = args;

  service(context.user.id, email);

  return true;
};

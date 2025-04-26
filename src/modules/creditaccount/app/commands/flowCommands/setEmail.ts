import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service";

export const setCreditAccountEmail = async (
  _: any,
  email: string,
  context: { user: { id: string } }
) => {
  await service(email, context.user.id);
  console.log("hit email");
  return true;
};

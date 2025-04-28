import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service";

export const setCreditAccountEmail = async (
  _: any,
  args: { email: string },
  context: { user: { id: string } }
) => {
  const { email } = args;
  console.log("ARGS: ", args);
  console.log("USER: ", context.user);

  // TEST: Fjern service midlertidigt
  // await service(email, context.user.id);
  service(context.user.id, email);
  console.log("Reached end of setCreditAccountEmail");
  return true;
};

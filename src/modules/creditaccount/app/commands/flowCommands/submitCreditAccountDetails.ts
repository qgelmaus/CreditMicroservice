import { submitCreditAccountDetails as service } from "../../../app/services/creditAccountCustomerFlow.service";

export const submitCreditAccountDetails = async (
  _: any,
  args: { details: Record<string, any> },
  context: { user: { id: string } }
) => {
  console.log("ARGS: ", args);
  console.log("USER: ", context.user);
  await service(context.user.id, args.details);
  return true;
};

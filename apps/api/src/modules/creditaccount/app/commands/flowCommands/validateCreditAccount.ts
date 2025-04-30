import { validateCreditAccount as service } from "../../services/creditAccountCustomerFlow.service";

export const validateCreditAccount = async (
  _: any,
  __: any,
  context: { user: { id: string } }
) => {
  await service(context.user.id);
  return true;
};

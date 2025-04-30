import { deleteFlow as service } from "../../services/creditAccountCustomerFlow.service";

export const cancelCreditAccountFlow = async (
  _: any,
  __: any,
  context: { user: { id: string } }
) => {
  service(context.user.id);
  return true;
};

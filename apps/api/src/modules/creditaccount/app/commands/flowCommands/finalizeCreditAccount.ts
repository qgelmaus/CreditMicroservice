import { finalizeCreditAccount as service } from "../../services/creditAccountCustomerFlow.service";

export const finalizeCreditAccount = async (
  _: any,
  __: any,
  context: { user: { id: string } }
) => {
  return await service(context.user.id);
};

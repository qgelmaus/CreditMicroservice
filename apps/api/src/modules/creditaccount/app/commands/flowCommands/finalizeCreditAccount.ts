import { finalizeCreditAccount as service } from "../../services/creditAccountCustomerFlow.service";
import type { Context } from "apps/api/src/graphql/buildContext";

export const finalizeCreditAccount = async (_: any, __: any, context: Context) => {
  const result = await service(context.user.id, context.services.creditAccount);
  return result;
};

import type { Context } from "../../../../../context/buildContext";
import { selectCreditAccountType as service } from "../../services/creditAccountCustomerFlow.service";

export const selectCreditAccountTypeResolver = async (
  _: unknown,
  args: { type: "GIFT_CARD" | "PREPAID_CARD" },
  context: Context,
) => {
  await service(context.user.id, args.type);
  return true;
};

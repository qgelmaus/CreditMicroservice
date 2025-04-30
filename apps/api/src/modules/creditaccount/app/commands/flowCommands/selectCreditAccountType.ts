import { selectCreditAccountType } from "../../services/creditAccountCustomerFlow.service";

export const selectCreditAccountTypeResolver = async (
  _: any,
  args: { type: "GIFT_CARD" | "PREPAID_CARD" },
  context: { user: { id: string } }
) => {
  await selectCreditAccountType(context.user.id, args.type);
  return true;
};

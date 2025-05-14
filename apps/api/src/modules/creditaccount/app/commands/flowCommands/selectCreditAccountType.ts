import { selectCreditAccountType as service } from "../../services/creditAccountCustomerFlow.service";
import type { Context } from "apps/api/src/server/graphql/buildContext";

export const selectCreditAccountTypeResolver = async (
	_: unknown,
	args: { type: "GIFT_CARD" | "PREPAID_CARD" },
	context: Context,
) => {
	await service(context.user.id, args.type);
	return true;
};

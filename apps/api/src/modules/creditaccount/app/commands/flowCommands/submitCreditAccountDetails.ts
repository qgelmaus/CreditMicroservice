import { submitCreditAccountDetails as service } from "../../../app/services/creditAccountCustomerFlow.service";
import type { Context } from "apps/api/src/server/graphql/buildContext";

export const submitCreditAccountDetails = async (
	_: unknown,
	args: { details: Record<string, any> },
	context: Context,
) => {
	await service(context.user.id, args.details);
	return true;
};

import { setCreditAccountEmail as service } from "../../../app/services/creditAccountCustomerFlow.service";
import type { Context } from "apps/api/src/server/graphql/buildContext";

export const setCreditAccountEmail = async (
	_: unknown,
	args: { email: string },
	context: Context,
) => {
	await service(context.user.id, args.email);
	return true;
};

import { CreditAccountService } from "../../../services/creditAccount.service";
import { QueryResolvers } from "apps/api/src/shared/types/codegen.types";

export const creditAccountByEmail: QueryResolvers["creditAccountByEmail"] = async (
	_parent,
	{ email },
	context
  ) => {
	return await context.services.creditAccount.findByEmail(email);
};


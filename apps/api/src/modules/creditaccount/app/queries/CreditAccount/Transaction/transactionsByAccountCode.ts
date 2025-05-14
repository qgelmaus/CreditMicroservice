import { CreditTransactionService } from "../../../services/creditTransactions.service";
import { QueryResolvers } from "apps/api/src/shared/types/codegen.types";

export const allCreditTransactions: QueryResolvers["allCreditTransactions"] = async (
	_parent,
	_args,
	context
  ) => {
	return await context.services.creditAccount.findAllTransactions();
};


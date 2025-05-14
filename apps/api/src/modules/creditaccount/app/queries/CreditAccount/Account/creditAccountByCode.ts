import { CreditAccountService } from "../../../services/creditAccount.service";
import type { QueryResolvers } from "../../../../../../shared/types/codegen.types";



export const creditAccountByCode: QueryResolvers["creditAccountByCode"] = async (
	_parent,
	{ code },
	context
  ) => {
	return await context.services.creditAccount.findByCode(code);
  };

  export const transactionsForAccountByCode: QueryResolvers["transactionsForAccountByCode"] = async (
	_parent,
	{ code },
	context
  ) => {
	return await context.services.creditAccount.findTransactions(code);
  };

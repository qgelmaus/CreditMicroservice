import { CreditAccountService } from "../../../services/creditAccount.service";
import type { QueryResolvers } from "../../../../../../shared/types/codegen.types";

export const allCreditAccounts: QueryResolvers["allCreditAccounts"] = async (
  _parent,
  _args,
  context
) => {
  return await context.services.creditAccount.findAll();
};

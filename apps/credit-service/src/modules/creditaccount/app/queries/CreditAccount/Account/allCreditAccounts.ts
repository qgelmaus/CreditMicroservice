import type { QueryResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";
import type { CreditAccountDTO } from "../../../dto/creditaccount.types.ts";

export const allCreditAccounts: QueryResolvers["allCreditAccounts"] = async (
  _parent,
  _args,
  context
) => {
  const accounts = await context.creditAccountService.findAll();
  return accounts.map((a: CreditAccountDTO) => mapToGraphQL(a));
};

import type { QueryResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";

export const allCreditAccounts: QueryResolvers["allCreditAccounts"] = async (
  _parent,
  _args,
  context,
) => {
  const accounts = await context.creditAccountService.findAll();
  return accounts.map((a) => mapToGraphQL(a));
};

import type { MutationResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";

export const useCredits: MutationResolvers["useCredits"] = async (
  _parent,
  { input },
  context
) => {
  const { creditCode, cost, note } = input;
  const account = await context.creditAccountService.useCredits(
    creditCode,
    cost,
    note ?? ""
  );

  return mapToGraphQL(account);
};

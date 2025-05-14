import type { MutationResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";

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

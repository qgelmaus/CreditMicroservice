import type { MutationResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";

export const refundMoney: MutationResolvers["refundMoney"] = async (
  _parent,
  { input },
  context
) => {
  const { creditCode, money, note } = input;

  const account = await context.creditAccountService.refundMoney(
    creditCode,
    money,
    note ?? ""
  );

  return mapToGraphQL(account);
};

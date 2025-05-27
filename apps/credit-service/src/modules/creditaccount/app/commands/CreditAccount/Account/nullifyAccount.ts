import type { MutationResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";

export const nullifyAccount: MutationResolvers["nullifyAccount"] = async (
  _parent,
  { input },
  context,
) => {
  if (!input) throw new Error("Input is undefined");
  const creditCode = input.creditCode;
  const note = input?.note ?? "";

  const account = await context.creditAccountService.nullifyAccount(
    creditCode,
    note,
  );
  return mapToGraphQL(account);
};

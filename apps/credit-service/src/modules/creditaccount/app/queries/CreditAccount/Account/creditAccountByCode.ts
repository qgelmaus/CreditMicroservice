import type { QueryResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";

export const creditAccountByCode: QueryResolvers["creditAccountByCode"] =
  async (_parent, { code }, context) => {
    const account = await context.creditAccountService.findByCode(code);
    return mapToGraphQL(account);
  };

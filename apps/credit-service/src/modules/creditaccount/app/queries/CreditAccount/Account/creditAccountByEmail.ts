import type { QueryResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";

export const creditAccountByEmail: QueryResolvers["creditAccountByEmail"] =
  async (_parent, { email }, context) => {
    const accounts = await context.creditAccountService.findByEmail(email);
    return accounts.map((a) => mapToGraphQL(a));
  };

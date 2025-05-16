import type { QueryResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";
import type { CreditAccountDTO } from "../../../dto/creditaccount.types.ts";

export const creditAccountByEmail: QueryResolvers["creditAccountByEmail"] =
  async (_parent, { email }, context) => {
    const accounts = await context.creditAccountService.findByEmail(email);
    return accounts.map((a: CreditAccountDTO) => mapToGraphQL(a));
  };

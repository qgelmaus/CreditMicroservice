import { CreditAccountService } from "../../../services/creditAccount.service";
import type { QueryResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";

export const creditAccountByCode: QueryResolvers["creditAccountByCode"] =
  async (_parent, { code }, context) => {
    const account = await context.creditAccountService.findByCode(code);
    return mapToGraphQL(account);
  };

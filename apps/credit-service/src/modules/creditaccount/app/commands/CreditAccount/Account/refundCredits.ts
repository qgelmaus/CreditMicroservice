import type { MutationResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";
import { CreditAccountService } from "../../../services/creditAccount.service";

export const refundCredits: MutationResolvers["refundCredits"] = async (
  _parent,
  { input },
  context,
) => {
  const { creditCode, cost, note } = input;

  const account = await context.creditAccountService.refundCredits(
    creditCode,
    cost,
    note ?? "",
  );

  return mapToGraphQL(account);
};

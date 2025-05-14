import type { MutationResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";
import { CreditAccountService } from "../../../services/creditAccount.service";

export const refundMoney: MutationResolvers["refundMoney"] = async (
  _parent,
  { input },
  context,
) => {
  const { creditCode, money, note } = input;

  const account = await context.creditAccountService.refundMoney(
    creditCode,
    money,
    note ?? "",
  );

  return mapToGraphQL(account);
};

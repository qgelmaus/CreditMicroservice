import type { MutationResolvers } from "../../../../../../shared/types/codegen.types.ts";

export const transferCredits: MutationResolvers["transferCredits"] = async (
  _parent,
  { input },
  context
) => {
  const { fromCreditCode, toCreditCode, amount, note } = input;
  return await context.creditAccountService.transferCredits(
    fromCreditCode,
    toCreditCode,
    amount,
    note ?? ""
  );
};

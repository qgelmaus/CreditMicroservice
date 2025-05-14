import type { MutationResolvers } from "../../../../../../shared/types/codegen.types";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";

export const createGiftAccount: MutationResolvers["createGiftAccount"] = async (
  _parent,
  args,
  context,
) => {
  const { input } = args;

  const account = await context.creditAccountService.createGiftAccount(
    input.purchaseAmount,
    input.email,
  );

  return mapToGraphQL(account);
};

export const createPrepaidAccount: MutationResolvers["createPrepaidAccount"] =
  async (_parent, args, context) => {
    const { input } = args;

    const account = await context.creditAccountService.createPrepaidAccount(
      input.treatmentCount,
      input.pricePerTreatment,
      input.email,
    );

    return mapToGraphQL(account);
  };

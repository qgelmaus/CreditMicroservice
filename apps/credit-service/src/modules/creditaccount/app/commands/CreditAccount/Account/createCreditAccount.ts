import type { MutationResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";
import { toServiceInput } from "../../../../infrastructure/helpers/mapToNewCreditAccountInput.ts";

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

export const createCreditAccount: MutationResolvers["createCreditAccount"] =
  async (_parent, args, context) => {
    if (!args.input) {
      throw new Error("Input mangler");
    }

    const { input } = args;

    const account = await context.creditAccountService.createCreditAccount(
      toServiceInput(input),
    );

    return mapToGraphQL(account);
  };

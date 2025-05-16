import type { MutationResolvers } from "../../../../../../shared/types/codegen.types.ts";
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL.ts";

export const createGiftAccount: MutationResolvers["createGiftAccount"] = async (
  _parent,
  args,
  context
) => {
  const { input } = args;

  const account = await context.creditAccountService.createGiftAccount(
    input.purchaseAmount,
    input.email
  );

  return mapToGraphQL(account);
};

export const createPrepaidAccount: MutationResolvers["createPrepaidAccount"] =
  async (_parent, args, context) => {
    const { input } = args;

    const account = await context.creditAccountService.createPrepaidAccount(
      input.treatmentCount,
      input.pricePerTreatment,
      input.email
    );

    return mapToGraphQL(account);
  };

export const createCreditAccount: MutationResolvers["createCreditAccount"] =
  async (_parent, args, context) => {
    console.log("📥 args.input:", args.input);

    if (!args.input) {
      console.error("❌ FEJL: input er undefined i createCreditAccount!");
      throw new Error("Input mangler");
    }

    const { input } = args;

    const account = await context.creditAccountService.createCreditAccount(
      input.email,
      input.type,
      input.treatmentCount,
      input.pricePerTreatment,
      input.purchaseAmount
    );

    return mapToGraphQL(account);
  };

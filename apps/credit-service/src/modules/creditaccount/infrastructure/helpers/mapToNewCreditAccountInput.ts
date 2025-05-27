import {
  CreateCreditAccountInput,
  CreditAccountType,
} from "apps/credit-service/src/shared/types/codegen.types.ts";
import {
  CreditAccountTypeEnum,
  NewCreditAccountInput,
} from "apps/credit-service/src/shared/types/input.types.ts";
import { toInternalEnum } from "../mappers/creditaccount.mapper.ts";

export function toServiceInput(
  input: CreateCreditAccountInput,
): NewCreditAccountInput {
  const type = toInternalEnum(input.type);

  if (type === CreditAccountTypeEnum.GIFT_CARD) {
    if (input.purchaseAmount == null) {
      throw new Error("purchaseAmount mangler for GIFT_CARD");
    }

    return {
      type,
      email: input.email,
      purchaseAmount: input.purchaseAmount,
    };
  }

  if (input.treatmentCount == null || input.pricePerTreatment == null) {
    throw new Error(
      "treatmentCount eller pricePerTreatment mangler for PREPAID_CARD",
    );
  }

  return {
    type,
    email: input.email,
    treatmentCount: input.treatmentCount,
    pricePerTreatment: input.pricePerTreatment,
  };
}

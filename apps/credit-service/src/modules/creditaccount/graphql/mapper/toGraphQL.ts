import type {
  GiftAccount,
  PrepaidAccount,
  Transaction,
} from "../../../../shared/types/codegen.types";
import type { CreditAccountDTO } from "../../app/dto/creditaccount.types";

export function mapToGraphQL(
  dto: CreditAccountDTO,
): GiftAccount | PrepaidAccount {
  const shared = {
    creditCode: dto.creditCode,
    type: dto.type,
    originalCredits: dto.originalCredits,
    originalMoney: dto.originalMoney,
    availableCredits: dto.availableCredits,
    availableMoney: dto.availableMoney,
    email: dto.email,
    isActive: dto.isActive,
    createdAt: dto.createdAt,
    expiresAt: dto.expiresAt,
    transactions: (dto.transactions ?? []) as Transaction[],
  };

  if (dto.type === "PREPAID_CARD") {
    return {
      __typename: "PrepaidAccount",
      ...shared,
      treatmentCount: dto.treatmentCount ?? null,
      discountPercentage: dto.discountPercentage ?? null,
    } as unknown as PrepaidAccount;
  }

  return {
    __typename: "GiftAccount",
    ...shared,
  } as unknown as GiftAccount;
}

import { createCreditAccount } from "../../services/creditService.ts";
import { createPaymentDetails } from "../../services/paymentService.ts";
import type { CreateAndCompleteInput } from "../../shared/types/types.ts";

export const creditMutations = {
  createCreditAccountAndCompletePayment: async (
    _: unknown,
    { input }: { input: CreateAndCompleteInput }
  ) => {
    const creditAccount = await createCreditAccount(input);

    const reference = `CREDIT:${creditAccount.creditCode}`;

    const paymentDetails = await createPaymentDetails({
      email: input.email,
      purchaseAmount: input.purchaseAmount ?? 0,
      paymentMethod: input.paymentMethod,
      reference,
    });

    return {
      creditAccount,
      paymentDetails,
    };
  },
};

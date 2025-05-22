import { createCreditAccount } from "../../services/creditService.ts";
import { createPaymentDetails } from "../../services/paymentService.ts";
import type { CreateAndCompleteInput } from "../../shared/types/types.ts";

export const creditMutations = {
  createCreditAccountAndCompletePayment: async (
    _: unknown,
    { input }: { input: CreateAndCompleteInput }
  ) => {
    console.log("Payload ind i gateway: ", input);

    const creditAccount = await createCreditAccount(input);

    const reference = `CREDIT:${creditAccount.creditCode}`;

    var purchaseAmount = input.purchaseAmount;
    if (input.pricePerTreatment && input.treatmentCount && !purchaseAmount) {
      if (input.treatmentCount === 5) {
        purchaseAmount = input.pricePerTreatment * input.treatmentCount * 0.88;
      } else {
        purchaseAmount = input.pricePerTreatment * input.treatmentCount * 0.86;
      }
    }

    const paymentDetails = await createPaymentDetails({
      email: input.email,
      purchaseAmount: purchaseAmount,
      paymentMethod: input.paymentMethod,
      reference,
    });

    return {
      creditAccount,
      paymentDetails,
    };
  },
};

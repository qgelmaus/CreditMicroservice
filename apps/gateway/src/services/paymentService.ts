import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import type {
  CreatePaymentDetailsInput,
  CreatePaymentResponse,
  PaymentDetails,
} from "../shared/types/payment.types.ts";

export async function loadPaymentSchema() {
  return await loadSchema("http://localhost:4002/graphql", {
    loaders: [new UrlLoader()],
  });
}

export async function createPaymentDetails(
  input: CreatePaymentDetailsInput
): Promise<PaymentDetails> {
  const res = await fetch("http://localhost:4002/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation CreatePayment($input: CreatePaymentInput!) {
          createPayment(input: $input) {
            id
            email
            paymentStatus
            reference
            stripeUrl
          }
        }
      `,
      variables: {
        input: {
          email: input.email,
          purchaseAmount: input.purchaseAmount,
          method: input.paymentMethod,
          reference: input.reference,
        },
      },
    }),
  });

  const json = (await res.json()) as CreatePaymentResponse;

  if (!json.data) {
    throw new Error("createCreditAccount failed");
  }

  return json.data.createPayment;
}

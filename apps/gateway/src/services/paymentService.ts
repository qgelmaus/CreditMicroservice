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
  console.log("➡️ Payload til payment-service:", {
    input: {
      email: input.email,
      purchaseAmount: input.purchaseAmount,
      reference: input.reference,
      paymentMethod: input.paymentMethod,
    },
  });
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
    console.error("❌ Ingen data fra credit-service:");
    console.dir(json, { depth: null });
    throw new Error("createCreditAccount fejlede – se log");
  }

  return json.data.createPayment;
}

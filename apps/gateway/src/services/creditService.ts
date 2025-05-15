import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import type {
  CreateAccountResponse,
  CreateCreditAccountInput,
  CreditAccount,
} from "../shared/types/creditAccount.types.ts";

export async function loadCreditSchema() {
  return await loadSchema("http://localhost:4001/graphql", {
    loaders: [new UrlLoader()],
  });
}

export async function createCreditAccount(
  input: CreateCreditAccountInput
): Promise<CreditAccount> {
  console.log("➡️ Payload til credit-service:", {
    input: {
      email: input.email,
      type: input.type,
      purchaseAmount: input.purchaseAmount,
      treatmentCount: input.treatmentCount,
      pricePerTreatment: input.pricePerTreatment,
    },
  });
  const res = await fetch("http://localhost:4001/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation CreateCreditAccount($input: CreateCreditAccountInput!) {
          createCreditAccount(input: $input) {
            creditCode
      email
      originalMoney
          }
        }
      `,
      variables: {
        input: {
          email: input.email,
          purchaseAmount: input.purchaseAmount,
          type: input.type,
        },
      },
    }),
  });

  const json = (await res.json()) as CreateAccountResponse;

  if (!json.data) {
    console.error("❌ Ingen data fra credit-service:");
    console.dir(json, { depth: null });
    throw new Error("createCreditAccount fejlede – se log");
  }

  return json.data.createCreditAccount;
}

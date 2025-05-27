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
      isActive
      
          }
        }
      `,
      variables: {
        input: {
          email: input.email,
          purchaseAmount: input.purchaseAmount,
          type: input.type,
          treatmentCount: input.treatmentCount,
          pricePerTreatment: input.pricePerTreatment,
        },
      },
    }),
  });

  const json = (await res.json()) as CreateAccountResponse;

  if (!json.data) {
    throw new Error("createCreditAccount failed");
  }

  return json.data.createCreditAccount;
}

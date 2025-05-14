import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";

export async function loadPaymentSchema() {
  return await loadSchema("http://localhost:4002/graphql", {
    loaders: [new UrlLoader()],
  });
}

import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";

export async function loadCreditSchema() {
  return await loadSchema("http://localhost:4001/graphql", {
    loaders: [new UrlLoader()],
  });
}

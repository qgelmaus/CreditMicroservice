import { stitchSchemas } from "@graphql-tools/stitch";
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { localResolvers } from "../resolvers/mutationResolvers.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function buildGatewaySchema() {
  const creditSchema = await loadSchema("http://localhost:4001/graphql", {
    loaders: [new UrlLoader()],
  });

  const paymentSchema = await loadSchema("http://localhost:4002/graphql", {
    loaders: [new UrlLoader()],
  });

  const localTypeDefs = fs.readFileSync(
    path.join(__dirname, "../schema/typedefs.gql"),
    "utf8",
  );

  const customSchema = makeExecutableSchema({
    typeDefs: localTypeDefs,
    resolvers: localResolvers,
  });

  return stitchSchemas({
    subschemas: [
      { schema: creditSchema },
      { schema: paymentSchema },
      { schema: customSchema },
    ],
  });
}

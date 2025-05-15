import { paymentResolvers } from "../../app/resolvers/index.ts";
import { gql } from "graphql-tag";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "typeDefs.gql"), "utf8")
);

export const paymentDetailsModule = {
  typeDefs: typeDefs,
  resolvers: paymentResolvers,
};

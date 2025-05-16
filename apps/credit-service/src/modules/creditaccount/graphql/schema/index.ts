import { gql } from "graphql-tag";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  creditAccountResolver,
  flowResolvers,
} from "../../app/resolvers/index.ts";

import type { Resolvers } from "../../../../shared/types/codegen.types.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "./typeDefs.gql"), "utf8")
);

export const creditAccountModule = {
  typeDefs,
  resolvers: {
    Mutation: {
      ...creditAccountResolver.Mutation,
      ...flowResolvers.Mutation,
    },
    Query: {
      ...creditAccountResolver.Query,
    },
    CreditAccount: creditAccountResolver.CreditAccount ?? {},
  } as Resolvers,
};

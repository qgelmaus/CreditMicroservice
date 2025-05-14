import gql from "graphql-tag";
import fs from "node:fs";
import path from "node:path";
import { creditAccountResolver, flowResolvers } from "../../app/resolvers";
import type { Resolvers } from "../../../../shared/types/codegen.types";

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "./typeDefs.gql"), "utf8"),
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

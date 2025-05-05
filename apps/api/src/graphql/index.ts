// src/graphql/index.ts
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs, resolvers } from "../modules/creditaccount/graphql/schema";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

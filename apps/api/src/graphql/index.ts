// src/graphql/schema/index.ts
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";
import fs from "fs";
import path from "path";

import { creditAccountModule } from "../modules/creditaccount/graphql/schema/index";
import { paymentDetailsModule } from "../modules/paymentDetails/graphql/schema/index";
import { DateScalar } from "../modules/shared/scalar/scalarResolver";

const baseSchema = gql(
  fs.readFileSync(path.join(__dirname, "baseSchema.gql"), "utf8")
);

const sharedEnums = gql(
  fs.readFileSync(path.join(__dirname, "../modules/shared/typeDefs/enums.gql"), "utf8")
);

export const typeDefs = mergeTypeDefs([
  baseSchema,
  sharedEnums,
  creditAccountModule.typeDefs,
  paymentDetailsModule.typeDefs,
]);

export const resolvers = mergeResolvers([
  { Date: DateScalar },
  creditAccountModule.resolvers,
  paymentDetailsModule.resolvers,
]);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

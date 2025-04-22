//src/modules/creditaccount/graphql/schema/index.ts
import fs from "node:fs";
import path from "node:path";
import gql from "graphql-tag";

import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import * as accounts from "./accounts";

import { DateScalar } from "../scalar/scalarResolver";

const baseSchema = fs.readFileSync(
  path.join(__dirname, "baseSchema.gql"),
  "utf8"
);
const accountSchema = fs.readFileSync(
  path.join(__dirname, "./accounts/typeDefs.gql"),
  "utf8"
);

export const typeDefs = mergeTypeDefs([gql(baseSchema), gql(accountSchema)]);

export const resolvers = mergeResolvers([
  { Date: DateScalar },
  accounts.creditAccountResolver,
]);

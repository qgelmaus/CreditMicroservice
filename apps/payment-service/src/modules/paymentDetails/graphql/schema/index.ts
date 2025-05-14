// paymentdetails/graphql/index.ts
import { paymentResolvers } from "../../app/resolvers";
import gql from "graphql-tag";
import fs from "node:fs";
import path from "node:path";

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "typeDefs.gql"), "utf8")
);

export const paymentDetailsModule = {
  typeDefs,
  resolvers: paymentResolvers,
};

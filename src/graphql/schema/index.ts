import fs from "node:fs";
import path from "node:path";
import gql from "graphql-tag";

import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import * as accounts from "./accounts";
import * as transactions from "./transactions";
import * as transfers from "./transfers";
import { DateScalar } from "../scalar/scalarResolver";

const baseSchema = fs.readFileSync(
	path.join(__dirname, "baseSchema.gql"),
	"utf8",
);
const accountSchema = fs.readFileSync(
	path.join(__dirname, "./accounts/typeDefs.gql"),
	"utf8",
);
const transactionSchema = fs.readFileSync(
	path.join(__dirname, "./transactions/typeDefs.gql"),
	"utf8",
);
const transferSchema = fs.readFileSync(
	path.join(__dirname, "./transfers/typeDefs.gql"),
	"utf8",
);

export const typeDefs = mergeTypeDefs([
	gql(baseSchema),
	gql(accountSchema),
	gql(transactionSchema),
	gql(transferSchema),
]);

export const resolvers = mergeResolvers([
	{ Date: DateScalar },
	accounts.resolvers,
	transactions.resolvers,
	transfers.resolvers,
]);

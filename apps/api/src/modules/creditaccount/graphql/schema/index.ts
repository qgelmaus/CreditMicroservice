//src/modules/creditaccount/graphql/schema/index.ts
import fs from "node:fs";
import path from "node:path";
import gql from "graphql-tag";

import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import {
	DateScalar,
	EmailAddressScalar,
	PositiveIntScalar,
} from "../scalar/scalarResolver";
import { creditAccountResolver, flowResolvers } from "../../app/resolvers";

const baseSchema = fs.readFileSync(
	path.join(__dirname, "baseSchema.gql"),
	"utf8",
);
const accountSchema = fs.readFileSync(
	path.join(__dirname, "./account/typeDefs.gql"),
	"utf8",
);

export const typeDefs = mergeTypeDefs([gql(baseSchema), gql(accountSchema)]);

export const resolvers = mergeResolvers([
	{
		Date: DateScalar,
		EmailAddress: EmailAddressScalar,
		PositiveInt: PositiveIntScalar,
	},
	creditAccountResolver,
	flowResolvers,
]);

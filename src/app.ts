import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs, resolvers } from "./creditaccounts/api/graphql/schema";

const app = express();

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV !== "test",
	}),
);

export { app };

import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs, resolvers } from "./modules/creditaccount/graphql/schema";
import type { Request, Response, NextFunction } from "express";


const app = express();

app.use((req: Request, res: Response, next: NextFunction): void => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") {
		res.sendStatus(200);
		return;
	}

	next();
});

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});




app.use(express.json());


app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
		context: {
			user: { id: "FAKE-USER-ID" },
		},
	})
);

export { app };

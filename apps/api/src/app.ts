import express from "express";
import { graphqlHTTP } from "express-graphql";
import type { Request, Response, NextFunction } from "express";

import { schema } from "./graphql/index"
import { buildContext } from "./graphql/buildContext";

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



app.use(express.json());


app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
		context: buildContext()

	})
);

export { app };

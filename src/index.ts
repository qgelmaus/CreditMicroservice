import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs, resolvers } from "./graphql/schema";
import cors from "cors";
import { logger } from "./utils/logger/logger";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

process.on("uncaughtException", (err) => {
	logger.error(err, "Uncaught Exception");
});

process.on("unhandledRejection", (reason) => {
	logger.error(reason, "Unhandled Rejection");
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
);

app.listen(port, () => {
	console.log(`server kører på http://localhost:${port}/graphql`);
});

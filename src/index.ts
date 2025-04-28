import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs, resolvers } from "./modules/creditaccount/graphql/schema";
import cors from "cors";
import { logger } from "./shared/utils/logger/logger";

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

app.use("/graphql", (req, res) =>
  graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      user: { id: "FAKE-USER-ID" },
    },
  })(req, res)
);

app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}/graphql`);
});

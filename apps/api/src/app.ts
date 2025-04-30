import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs, resolvers } from "./modules/creditaccount/graphql/schema";

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
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

export { app };

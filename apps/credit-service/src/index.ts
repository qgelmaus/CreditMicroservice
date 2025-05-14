// apps/credit-service/src/index.ts
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildContext } from "./context/buildContext";
import { creditAccountModule } from "./modules/creditaccount/graphql/schema/index";
import { graphqlLoggerPlugin } from "./utils/logger/graphqlLoggerPlugin";

const server = new ApolloServer({
  typeDefs: creditAccountModule.typeDefs,
  resolvers: creditAccountModule.resolvers,
  plugins: [graphqlLoggerPlugin],
});

startStandaloneServer(server, {
  context: buildContext,
  listen: { port: 4001 },
}).then(({ url }) => {
  console.log(`🚀 Credit service ready at ${url}`);
});

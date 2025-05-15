// apps/credit-service/src/index.ts
import { ApolloServer, type BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildContext } from "./context/buildContext.ts";
import { creditAccountModule } from "./modules/creditaccount/graphql/schema/index.ts";
import { graphqlLoggerPlugin } from "./utils/logger/graphqlLoggerPlugin.ts";

const server = new ApolloServer<BaseContext>({
  typeDefs: creditAccountModule.typeDefs,
  resolvers: creditAccountModule.resolvers,
  introspection: true,
  plugins: [graphqlLoggerPlugin],
});

startStandaloneServer(server, {
  context: buildContext,
  listen: { port: 4001 },
}).then(({ url }) => {
  console.log(`🚀 Credit service ready at ${url}`);
});

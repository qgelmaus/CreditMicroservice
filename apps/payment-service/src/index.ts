// apps/credit-service/src/index.ts

import { ApolloServer, type BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { graphqlLoggerPlugin } from "./utils/logger/graphqlLoggerPlugin.ts";
import { buildContext } from "./context/buildContext.ts";
import { paymentDetailsModule } from "./modules/paymentDetails/graphql/schema/index.ts";

const server = new ApolloServer<BaseContext>({
  typeDefs: paymentDetailsModule.typeDefs,
  introspection: true,
  resolvers: paymentDetailsModule.resolvers,
  plugins: [graphqlLoggerPlugin],
});

startStandaloneServer(server, {
  context: buildContext,
  listen: { port: 4002 },
}).then(({ url }) => {
  console.log(`🚀 Payment service ready at ${url}`);
});

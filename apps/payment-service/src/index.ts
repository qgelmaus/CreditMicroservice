// apps/credit-service/src/index.ts

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { paymentDetailsModule } from "./modules/paymentDetails/graphql/schema";
import { graphqlLoggerPlugin } from "./utils/logger/graphqlLoggerPlugin";
import { buildContext } from "./context/buildContext";

const server = new ApolloServer({
  typeDefs: paymentDetailsModule.typeDefs,
  resolvers: paymentDetailsModule.resolvers,
  plugins: [graphqlLoggerPlugin],
});

startStandaloneServer(server, {
  context: buildContext,
  listen: { port: 4002 },
}).then(({ url }) => {
  console.log(`🚀 Payment service ready at ${url}`);
});

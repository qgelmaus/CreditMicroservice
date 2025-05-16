// apps/credit-service/src/index.ts
import { ApolloServer, type BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildContext } from "./context/buildContext.ts";
import { creditAccountModule } from "./modules/creditaccount/graphql/schema/index.ts";
import { graphqlLoggerPlugin } from "./utils/logger/graphqlLoggerPlugin.ts";
import { startConsumer } from "./modules/creditaccount/domain/events/startConsumer.ts";

const server = new ApolloServer<BaseContext>({
  typeDefs: creditAccountModule.typeDefs,
  resolvers: creditAccountModule.resolvers,
  introspection: true,
  plugins: [graphqlLoggerPlugin],
});

const bootstrap = async () => {
  const { url } = await startStandaloneServer(server, {
    context: buildContext,
    listen: { port: 4001 },
  });
  console.log("===============================");
  console.log(` Credit service ready at ${url}`);

  try {
    await startConsumer();
    console.log("RabbitMQ consumer started");
  } catch (err) {
    console.error("Failed to start RabbitMQ consumer:", err);
  }
};

bootstrap();

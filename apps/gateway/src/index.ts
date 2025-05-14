import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildGatewaySchema } from "./schema/mergedSchema";
import { graphqlLoggerPlugin } from "./utils/logger/logger";

async function start() {
  const schema = await buildGatewaySchema();

  const server = new ApolloServer({
    schema: schema,
    plugins: [graphqlLoggerPlugin],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Gateway kører på ${url}`);
}

start();

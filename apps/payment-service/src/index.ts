import bodyParser from "body-parser";
import express from "express";
import http from "http";
import cors from "cors";

import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { graphqlLoggerPlugin } from "./utils/logger/graphqlLoggerPlugin.ts";
import { buildContext } from "./context/buildContext.ts";
import { paymentDetailsModule } from "./modules/paymentDetails/graphql/schema/index.ts";
import stripeWebhookRouter from "./modules/stripe/api/routes/stripeWebhook.routes.ts"; // ændret import

async function startServer() {
  const json = bodyParser.json;
  const raw = bodyParser.raw;
  const app = express();
  const httpServer = http.createServer(app);

  // Stripe Webhook
  app.use(
    "/webhook/stripe",
    raw({ type: "application/json" }),
    stripeWebhookRouter
  );

  const server = new ApolloServer<BaseContext>({
    typeDefs: paymentDetailsModule.typeDefs,
    resolvers: paymentDetailsModule.resolvers,
    introspection: true,
    plugins: [graphqlLoggerPlugin],
  });

  await server.start();

  // GraphQL API
  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
      context: buildContext,
    })
  );

  const PORT = 4002;
  httpServer.listen(PORT, () => {
    console.log("🚀 Payment-service kører på http://localhost:4002/graphql");
    console.log(
      "📬 Webhook endpoint kører på http://localhost:4002/webhook/stripe"
    );
  });
}

startServer();

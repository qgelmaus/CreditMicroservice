import "dotenv/config";
import { connect } from "amqplib";
import { setupConsumers } from "./consumers/CreditAccount/prepaidAccountCreated.consumer.ts";

const start = async () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY in environment");
  }

  const connection = await connect("amqp://localhost");
  const channel = await connection.createChannel();

  await setupConsumers(channel);

  console.log("📨 Notification service is listening for events...");
};

start().catch((err) => {
  console.error("❌ Failed to start notification service", err);
});

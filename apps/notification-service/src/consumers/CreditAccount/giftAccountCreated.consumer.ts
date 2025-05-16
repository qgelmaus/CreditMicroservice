import type { Channel } from "amqplib";
import { sendGiftAccountEmail } from "../../email/sendCreditAccountEmail.ts";

export const setupConsumers = async (channel: Channel) => {
  const exchange = "domain_events";
  const queue = "notification-service-queue";

  await channel.assertExchange(exchange, "topic", { durable: true });
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, "creditaccount.created");

  channel.consume(queue, async (msg) => {
    if (msg) {
      const event = JSON.parse(msg.content.toString());
      console.log("📥 Received gift-account event:", event);

      const {
        email,
        creditCode,
        originalMoney,
        originalCredits,
        expiresAt,
        type,
      } = event.payload;

      await sendGiftAccountEmail(
        email,
        creditCode,
        type,
        originalCredits,
        originalMoney,
        expiresAt
      );

      channel.ack(msg);
    }
  });
};

import type { Channel } from "amqplib";
import { sendPrepaidAccountEmail } from "../../email/sendCreditAccountEmail.ts";

export const setupConsumers = async (channel: Channel) => {
  const exchange = "domain_events";
  const queue = "notification-service-queue";

  await channel.assertExchange(exchange, "topic", { durable: true });
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, "prepaidaccount.created");

  channel.consume(queue, async (msg) => {
    if (msg) {
      const event = JSON.parse(msg.content.toString());
      console.log("📥 Received prepaid-account event:", event);

      const {
        email,
        creditCode,
        originalMoney,
        originalCredits,
        expiresAt,
        type,
        treatmenCount,
      } = event.payload;

      await sendPrepaidAccountEmail(
        email,
        creditCode,
        type,
        originalCredits,
        originalMoney,
        treatmenCount,
        expiresAt
      );

      channel.ack(msg);
    }
  });
};

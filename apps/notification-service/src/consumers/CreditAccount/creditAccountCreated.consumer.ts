import type { Channel } from "amqplib";
import {
  sendGiftAccountEmail,
  sendPrepaidAccountEmail,
} from "../../email/sendCreditAccountEmail.ts";

export const setupConsumers = async (channel: Channel) => {
  const exchange = "domain_events";
  const queue = "notification-service-queue";

  await channel.assertExchange(exchange, "topic", { durable: true });
  await channel.assertQueue(queue, { durable: true });

  await channel.bindQueue(queue, exchange, "giftaccount.created");
  await channel.bindQueue(queue, exchange, "prepaidaccount.created");

  channel.consume(queue, async (msg) => {
    if (!msg) return;

    const event = JSON.parse(msg.content.toString());
    const {
      email,
      creditCode,
      originalMoney,
      originalCredits,
      expiresAt,
      type,
      treatmentCount,
    } = event.payload;

    switch (event.name) {
      case "giftaccount.created":
        await sendGiftAccountEmail(
          email,
          creditCode,
          type,
          originalCredits,
          originalMoney,
          expiresAt,
        );
        break;

      case "prepaidaccount.created":
        await sendPrepaidAccountEmail(
          email,
          creditCode,
          type,
          originalCredits,
          originalMoney,
          treatmentCount,
          expiresAt,
        );
        break;

      default:
        console.warn("⚠️ Ukendt event-type:", event.name);
        break;
    }

    channel.ack(msg);
  });
};

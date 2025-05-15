import { connect } from "amqplib";
import type { DomainEvent } from "./types.ts";

export type EventHandler = (event: DomainEvent) => Promise<void>;

export class RabbitEventConsumer {
  constructor(
    private routingKey: string,
    private handler: EventHandler
  ) {}

  async start() {
    const conn = await connect("amqp://guest:guest@localhost");
    const channel = await conn.createChannel();

    await channel.assertExchange("domain_events", "topic", { durable: true });

    const queue = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(queue.queue, "domain_events", this.routingKey);

    channel.consume(queue.queue, async (msg) => {
      if (!msg) return;
      const event = JSON.parse(msg.content.toString());
      await this.handler(event); // kalder brugerens handler
      channel.ack(msg);
    });
  }
}

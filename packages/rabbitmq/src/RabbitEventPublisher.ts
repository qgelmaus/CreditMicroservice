// packages/rabbitmq/src/RabbitEventPublisher.ts
import * as amqp from "amqplib";
import type { DomainEvent, DomainEventPublisher } from "./types.ts";

export class RabbitEventPublisher implements DomainEventPublisher {
  private connection!: amqp.Connection;
  private channel!: amqp.Channel;

  constructor(channel?: amqp.Channel) {
    if (channel) {
      this.channel = channel;
    }
  }

  async connect() {
    if (process.env.SKIP_RABBITMQ === "true") {
      console.log("🔕 RabbitMQ consumer disabled via SKIP_RABBITMQ");
      return;
    }

    const conn = await amqp.connect("amqp://guest:guest@localhost");
    const chan = await conn.createChannel();

    this.connection = conn;
    this.channel = chan;

    await this.channel.assertExchange("domain_events", "topic", {
      durable: true,
    });
  }

  async publish(event: DomainEvent) {
    await this.channel.assertExchange("domain_events", "topic", {
      durable: true,
    });
    const msg = Buffer.from(JSON.stringify(event));
    this.channel.publish("domain_events", event.name, msg);
  }

  async close() {
    await this.channel.close();
    await this.connection.close();
  }
}

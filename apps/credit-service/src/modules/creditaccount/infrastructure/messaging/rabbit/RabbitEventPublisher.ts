import { connect, type Connection, type Channel } from "amqplib";
import type { DomainEventPublisher } from "../../../domain/events/DomainEventPublisher";
import type { DomainEvent } from "../../../domain/events/DomainEvent";

export class RabbitEventPublisher implements DomainEventPublisher {
  private connection!: Connection;
  private channel!: Channel;
  private connected = false;

  async connect() {
    if (this.connected && this.channel) return;

    try {
      console.log("⌛️ Connecting to Rabbit-MQ Server");

      const rmqUser = process.env.RMQ_USER ?? "guest";
      const rmqPass = process.env.RMQ_PASS ?? "guest";
      const rmqHost = process.env.RMQ_HOST ?? "localhost";

      const uri = `amqp://${rmqUser}:${rmqPass}@${rmqHost}:5672`;
      this.connection = await connect(uri);

      console.log("✅ Rabbit MQ Connection is ready");

      this.channel = await this.connection.createChannel();
      this.connected = true;

      console.log("🛸 Created RabbitMQ Channel successfully");
    } catch (error) {
      console.error("❌ Failed to connect to RabbitMQ:", error);
    }
  }

  async publish(event: DomainEvent) {
    if (!this.connected || !this.channel) {
      throw new Error("RabbitMQ is not connected");
    }

    const exchange = "domain_events";
    await this.channel.assertExchange(exchange, "topic", { durable: true });

    const routingKey = event.name;
    const payload = Buffer.from(JSON.stringify(event));

    this.channel.publish(exchange, routingKey, payload);
    console.log(`📤 Published event: ${event.name}`);
  }

  async close() {
    if (!this.connected) return;

    await this.channel.close();
    await this.connection.close();
    this.connected = false;

    console.log("🛑 RabbitMQ connection closed");
  }
}

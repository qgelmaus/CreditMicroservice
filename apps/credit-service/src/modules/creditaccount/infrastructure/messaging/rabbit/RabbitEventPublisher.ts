import { ChannelModel, connect, Connection } from "amqplib";
import { DomainEventPublisher } from "../../../domain/events/DomainEventPublisher";
import { DomainEvent } from "../../../domain/events/DomainEvent";
import { Channel } from "diagnostics_channel";

export class RabbitEventPublisher implements DomainEventPublisher {
  connection!: Connection;
  channel!: Channel;

  private connected!: boolean;

  async connect() {
    if (this.connected && this.channel) return;
    else this.connected = true;

    try {
      console.log(`⌛️ Connecting to Rabbit-MQ Server`);
      this.connection = await client.connect(
        `amqp://${rmqUser}:${rmqPass}@${rmqhost}:5672`
      );

      console.log(`✅ Rabbit MQ Connection is ready`);

      this.channel = await this.connection.createChannel();

      console.log(`🛸 Created RabbitMQ Channel successfully`);
    } catch (error) {
      console.error(error);
      console.error(`Not connected to MQ Server`);
    }
  }

  async publish(event: DomainEvent) {
    const exchange = "domain_events";
    await this.channel.assertExchange(exchange, "topic", { durable: true });

    const routingKey = event.name;
    const payload = Buffer.from(JSON.stringify(event));

    this.channel.publish(exchange, routingKey, payload);
    console.log(`📤 Published event: ${event.name}`);
  }

  async close() {
    await this.channel.close();
    await this.connection.close();
  }
}

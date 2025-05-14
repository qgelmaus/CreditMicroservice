import { connect } from "amqplib";

export class RabbitEventConsumer {
  async listen(
    eventName: string,
    handler: (eventPayload: any) => Promise<void>
  ) {
    const connection = await connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "domain_events";
    await channel.assertExchange(exchange, "topic", { durable: true });

    const queue = `${eventName}-queue`;
    await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchange, eventName);

    await channel.consume(queue, async (msg) => {
      if (!msg) return;

      const payload = JSON.parse(msg.content.toString());
      console.log(`📥 Received event: ${eventName}`, payload);

      try {
        await handler(payload);
        channel.ack(msg);
      } catch (err) {
        console.error("❌ Failed to handle event", err);
        channel.nack(msg, false, false); // drop message
      }
    });
  }
}

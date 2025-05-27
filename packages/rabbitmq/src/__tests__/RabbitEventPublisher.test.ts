import { RabbitEventPublisher } from "../RabbitEventPublisher.ts";
import { mock } from "jest-mock-extended";
import type { Channel } from "amqplib";
import { DomainEvent } from "../types.ts";

describe("RabbitEventPublisher", () => {
  it("publishes to the correct exchange and routing key", async () => {
    const channel = mock<Channel>();
    const publisher = new RabbitEventPublisher(channel);

    const fakeEvent: DomainEvent = {
      name: "test.event",
      occurredAt: new Date(),
      payload: { message: "hello" },
    };

    await publisher.publish(fakeEvent);

    expect(channel.assertExchange).toHaveBeenCalledWith(
      "domain_events",
      "topic",
      { durable: true }
    );
    expect(channel.publish).toHaveBeenCalledWith(
      "domain_events",
      "test.event",
      expect.any(Buffer)
    );
  });
});

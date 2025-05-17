import { RabbitEventPublisher } from "../RabbitEventPublisher.js";
import { mock } from "jest-mock-extended";
import type { Channel } from "amqplib";
import { DomainEvent } from "../types.js";

describe("RabbitEventPublisher", () => {
  it("publishes to the correct exchange and routing key", async () => {
    const channel = mock<Channel>();
    const publisher = new RabbitEventPublisher();
    (publisher as any).channel = channel;

    const fakeEvent: DomainEvent = {
      name: "test.event",
      occurredAt: new Date(),
      payload: {
        message: "hello world",
      },
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

    const bufferArg = (channel.publish as jest.Mock).mock.calls[0][2];
    const parsed = JSON.parse(bufferArg.toString());

    expect(parsed.name).toBe("test.event");
    expect(parsed.payload.message).toBe("hello world");
  });
});

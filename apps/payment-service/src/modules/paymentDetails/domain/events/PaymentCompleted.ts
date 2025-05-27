// PaymentCompletedEvent.ts

import type { DomainEvent } from "packages/rabbitmq/src/types.ts";

export class PaymentCompletedEvent implements DomainEvent {
  name = "payment.completed";
  occurredAt = new Date();

  constructor(
    public payload: {
      paymentId: string;
      reference: string;
      amountMoney: number;
    },
  ) {}
}

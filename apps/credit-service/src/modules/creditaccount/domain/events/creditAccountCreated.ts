import type { DomainEvent } from "packages/rabbitmq/src/types.ts";

export class GiftAccountCreatedEvent implements DomainEvent {
  name = "creditaccount.created";
  occurredAt = new Date();

  constructor(
    public payload: {
      creditCode: string;
      email: string;
      originalCredits: number;
      originalMoney: number;
      expiresAt: Date;
    }
  ) {}
}

export class PrepaidAccountCreatedEvent implements DomainEvent {
  name = "creditaccount.created";
  occurredAt = new Date();

  constructor(
    public payload: {
      creditCode: string;
      email: string;
      originalCredits: number;
      originalMoney: number;
      treatmentCount: number;
      expiresAt: Date;
    }
  ) {}
}

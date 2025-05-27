import type { CreditAccountType } from "apps/credit-service/src/prisma/generated/client/index.js";
import type { DomainEvent } from "packages/rabbitmq/src/types.ts";

export class GiftAccountCreatedEvent implements DomainEvent {
  name = "giftaccount.created";
  occurredAt = new Date();

  constructor(
    public payload: {
      creditCode: string;
      email: string;
      type: string;
      originalCredits: number;
      originalMoney: number;
      expiresAt: Date;
    },
  ) {}
}

export class PrepaidAccountCreatedEvent implements DomainEvent {
  name = "prepaidaccount.created";
  occurredAt = new Date();

  constructor(
    public payload: {
      creditCode: string;
      email: string;
      type: string;
      originalCredits: number;
      originalMoney: number;
      treatmentCount: number;
      expiresAt: Date;
    },
  ) {}
}

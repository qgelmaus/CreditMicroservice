import type { DomainEvent } from "./DomainEvent";

export class CreditAccountCreated implements DomainEvent {
  name = "CreditAccountCreated";
  occurredAt = new Date();

  constructor(public payload: { creditAccountId: string; email: string }) {}
}

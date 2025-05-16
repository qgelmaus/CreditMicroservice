export interface DomainEvent {
  name: string;
  payload: any;
  occurredAt: Date;
}

export interface DomainEventPublisher {
  publish(event: DomainEvent): Promise<void>;
}

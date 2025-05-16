import {
  toDomain,
  toDTO,
} from "../../infrastructure/mappers/paymentdetails.mapper.ts";
import type { PaymentDetailsRepository } from "../../infrastructure/repository/paymentDetails.repository.ts";
import type { PaymentDetailsDTO } from "../dto/paymentDetails.types.ts";
import { PaymentDetailsFactory } from "../../domain/PaymentDetailsFactory.ts";
import type { PaymentMethod } from "../../../../shared/types/codegen.types.ts";

import { PaymentCompletedEvent } from "../../domain/events/PaymentCompleted.ts";
import type { RabbitEventPublisher } from "packages/rabbitmq/src/index.ts";

type PaymentInput = {
  email: string;
  purchaseAmount: number;
  paymentMethod: PaymentMethod;
  reference: string;
};

export class PaymentDetailsService {
  constructor(
    private readonly repo: PaymentDetailsRepository,
    private readonly evenPublisher: RabbitEventPublisher
  ) {}

  async create(input: PaymentInput): Promise<PaymentDetailsDTO> {
    const payment = PaymentDetailsFactory.createNew(input);
    const saved = await this.repo.create(payment);

    return toDTO(saved);
  }

  async createPaymentDetails() {}

  async changePaymentStatus(
    id: string,
    newStatus: "PENDING" | "COMPLETED" | "FAILED"
  ): Promise<PaymentDetailsDTO> {
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("PaymentDetails not found");

    const payment = toDomain(existing);
    payment.setStatus(newStatus);

    const updated = await this.repo.updateStatus({
      id: payment.getId(),
      newPaymentStatus: payment.getStatusRaw(),
    });

    if (newStatus === "COMPLETED") {
      await this.evenPublisher.publish(
        new PaymentCompletedEvent({
          paymentId: payment.getId(),
          reference: payment.getReference(),
          amountMoney: payment.getAmount(),
        })
      );
    }

    return toDTO(updated);
  }

  async findById(id: string): Promise<PaymentDetailsDTO> {
    const paymentDetails = await this.repo.findById(id);
    if (!paymentDetails) throw new Error("Details not found");
    return toDTO(toDomain(paymentDetails));
  }
}

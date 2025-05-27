import {
  type PaymentMethod,
  PaymentStatus,
} from "apps/payment-service/src/prisma/generated/client/index.js";
import type { PaymentDetailsDTO } from "../app/dto/paymentDetails.types.ts";

export interface PaymentDetailsProps {
  id?: string;
  email: string;
  amountMoney: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentDate?: Date;
  reference: string;
  createdAt?: Date;
  stripeUrl?: string;
}

export class PaymentDetails {
  private readonly id?: string;
  private readonly email: string;
  private readonly amountMoney: number;
  private readonly paymentMethod: PaymentMethod;
  private paymentStatus: PaymentStatus;
  private paymentDate: Date;
  private readonly reference: string;
  private readonly createdAt?: Date;
  private stripeUrl?: string;

  private constructor(props: PaymentDetailsProps) {
    this.id = props.id;
    this.email = props.email;
    this.amountMoney = props.amountMoney;
    this.paymentMethod = props.paymentMethod;
    this.paymentStatus = props.paymentStatus;
    this.paymentDate = props.paymentDate ?? new Date();
    this.reference = props.reference;
    this.createdAt = props.createdAt;
    this.stripeUrl = props.stripeUrl;
  }

  static create(
    props: Omit<
      PaymentDetailsProps,
      "paymentDate" | "id" | "createdAt" | "paymentStatus"
    >,
  ): PaymentDetails {
    if (!props.reference || props.reference.trim() === "") {
      throw new Error("Reference er påkrævet");
    }

    return new PaymentDetails({
      ...props,
      paymentStatus: PaymentStatus.PENDING,
    });
  }

  completePayment() {
    this.paymentStatus = PaymentStatus.COMPLETED;
  }

  failPayment() {
    this.paymentStatus = PaymentStatus.FAILED;
  }

  refundPayment() {
    this.paymentStatus = PaymentStatus.REFUNDED;
  }

  setStripeUrl(url: string): void {
    this.stripeUrl = url;
  }

  setStatus(newStatus: PaymentStatus): PaymentDetails {
    const allowed: PaymentStatus[] = [
      PaymentStatus.PENDING,
      PaymentStatus.COMPLETED,
      PaymentStatus.FAILED,
      PaymentStatus.REFUNDED,
    ];

    if (!allowed.includes(newStatus)) {
      throw new Error(`Ugyldig status: ${newStatus}`);
    }

    this.paymentStatus = newStatus;

    if (newStatus === PaymentStatus.COMPLETED) {
      this.paymentDate = new Date();
    }

    return this;
  }

  getId(): string {
    if (this.id) return this.id;
    throw new Error("Id not set yet");
  }

  getEmail(): string {
    return this.email;
  }

  getAmount(): number {
    return this.amountMoney;
  }

  getPaymentMethod(): PaymentMethod {
    return this.paymentMethod;
  }

  getReference(): string {
    return this.reference;
  }

  getPaymentDate(): Date {
    return this.paymentDate;
  }

  getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  getStatusRaw(): PaymentStatus {
    return this.paymentStatus;
  }

  markAsCompleted(): void {
    this.paymentStatus = PaymentStatus.COMPLETED;
    this.paymentDate = new Date();
  }

  static restore(props: {
    id: string;
    email: string;
    amountMoney: number;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    reference: string;
    paymentDate: Date;
    createdAt?: Date;
  }): PaymentDetails {
    return new PaymentDetails({
      id: props.id,
      email: props.email,
      amountMoney: props.amountMoney,
      paymentMethod: props.paymentMethod,
      paymentStatus: props.paymentStatus,
      reference: props.reference,
      paymentDate: props.paymentDate,
      createdAt: props.createdAt,
    });
  }

  toDTO(): PaymentDetailsDTO {
    if (!this.id) {
      throw new Error("Kan ikke mappe PaymentDetails til DTO uden id.");
    }

    return {
      id: this.id,
      email: this.email,
      amountMoney: this.amountMoney,
      paymentMethod: this.paymentMethod,
      paymentStatus: this.paymentStatus,
      reference: this.reference,
      paymentDate: this.paymentDate,
      createdAt: this.createdAt ?? new Date(),
      stripeUrl: this.stripeUrl ?? "",
    };
  }

  getDataToPersist() {
    return {
      email: this.email,
      amountMoney: this.amountMoney,
      paymentMethod: this.paymentMethod,
      paymentStatus: this.paymentStatus,
      paymentDate: this.paymentDate,
      reference: this.reference,
    };
  }
}

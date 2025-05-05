import { type PaymentMethod, PaymentStatus } from "@prisma/client";
import { Money } from "../../creditaccount/domain/valueobjects/Money";
import type { PaymentDetailsDTO } from "../app/dto/paymentDetails.types";

export interface PaymentDetailsProps {
  id?: string;
  creditAccountId: number;
  amountMoney: Money;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentDate?: Date;
  reference: string;
}

export class PaymentDetails {
  private readonly id?: string;
  private readonly creditAccountId: number;
  private readonly amountMoney: Money;
  private readonly paymentMethod: PaymentMethod;
  private paymentStatus: PaymentStatus;
  private paymentDate: Date;
  private readonly reference: string;

  private constructor(props: PaymentDetailsProps) {
    this.id = props.id;
    this.creditAccountId = props.creditAccountId;
    this.amountMoney = props.amountMoney;
    this.paymentMethod = props.paymentMethod;
    this.paymentStatus = props.paymentStatus;
    this.paymentDate = props.paymentDate ?? new Date();
    this.reference = props.reference;
  }

  static create(props: PaymentDetailsProps): PaymentDetails {
    if (!props.reference || props.reference.trim() === "") {
      throw new Error("Reference er påkrævet");
    }

    return new PaymentDetails(props);
  }

  get status(): boolean {
    return this.paymentStatus === "COMPLETED";
  }

  markAsCompleted(): void {
    this.paymentStatus = PaymentStatus.COMPLETED;
    this.paymentDate = new Date();
  }

  static restore(props: {
    id: string;
    creditAccountId: number;
    amountMoney: number;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    reference: string;
    paymentDate: Date;
  }): PaymentDetails {
    return new PaymentDetails({
      id: props.id,
      creditAccountId: props.creditAccountId,
      amountMoney: new Money(props.amountMoney),
      paymentMethod: props.paymentMethod,
      paymentStatus: props.paymentStatus,
      reference: props.reference,
      paymentDate: props.paymentDate,
    });
  }

  toDTO(): PaymentDetailsDTO {
    if (!this.id) {
      throw new Error("Kan ikke mappe PaymentDetails til DTO uden id.");
    }

    return {
      id: this.id,
      creditAccountId: this.creditAccountId,
      amountMoney: this.amountMoney.getAmount(),
      paymentMethod: this.paymentMethod,
      paymentStatus: this.paymentStatus,
      reference: this.reference,
      paymentDate: this.paymentDate,
    };
  }

  getDataToPersist() {
    return {
      creditAccountId: this.creditAccountId,
      amountMoney: this.amountMoney,
      paymentMethod: this.paymentMethod,
      paymentStatus: this.paymentStatus,
      paymentDate: this.paymentDate,
      reference: this.reference,
    };
  }
}

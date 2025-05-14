import {
  toDomain,
  toDTO,
} from "../../infrastructure/mappers/paymentdetails.mapper";
import type { PaymentDetailsRepository } from "../../infrastructure/repository/paymentDetails.repository";
import type { PaymentDetailsDTO } from "../dto/paymentDetails.types";
import { PaymentDetailsFactory } from "../../domain/PaymentDetailsFactory";
import type { PaymentMethod } from "../../../../shared/types/codegen.types";

type PaymentInput = {
  email: string;
  amountMoney: number;
  paymentMethod: PaymentMethod;
  reference: string;
};

export class PaymentDetailsService {
  constructor(private readonly repo: PaymentDetailsRepository) {}

  async create(input: PaymentInput): Promise<PaymentDetailsDTO> {
    const payment = PaymentDetailsFactory.createNew(input);
    const saved = await this.repo.create(payment);

    return toDTO(saved);
  }

  async createPaymentDetails() {}

  async changePaymentStatus() {}

  async findById(id: string): Promise<PaymentDetailsDTO> {
    const paymentDetails = await this.repo.findById(id);
    if (!paymentDetails) throw new Error("Details not found");
    return toDTO(toDomain(paymentDetails));
  }
}

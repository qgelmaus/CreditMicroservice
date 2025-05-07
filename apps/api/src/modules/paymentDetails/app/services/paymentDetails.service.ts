import type { PaymentDetails } from "../../domain/PaymentDetails";
import {
  toDomain,
  toDTO,
} from "../../infrastructure/mappers/paymentdetails.mapper";
import type { PaymentDetailsRepository } from "../../infrastructure/repository/paymentDetails.repository";
import type { PaymentDetailsDTO } from "../dto/paymentDetails.types";
import type { PaymentMethod } from "@prisma/client";
import { PaymentDetailsFactory } from "../../domain/PaymentDetailsFactory";
import type { CreditAccount } from "../../../creditaccount/domain/CreditAccount";

type PaymentInput = {
  amountMoney: number;
  paymentMethod: PaymentMethod;
  creditAccount: CreditAccount;
  reference: string;
};

export class PaymentDetailsService {
  constructor(private readonly repo: PaymentDetailsRepository) {}

  //TODO [CreateCreditAccountWithPayment]
  async create(input: PaymentInput): Promise<PaymentDetails> {
    const payment = PaymentDetailsFactory.createNew(input);
    return await this.repo.create(payment);
  }

  async createPaymentDetails() {}

  async changePaymentStatus() {}

  async findById(id: string): Promise<PaymentDetailsDTO> {
    const paymentDetails = await this.repo.findById(id);
    if (!paymentDetails) throw new Error("Details not found");
    return toDTO(toDomain(paymentDetails));
  }
}

import type { CreateCreditAccountWithPaymentInput } from "apps/api/src/application/services/createCreditAccountWithPayment/createCreditAccountWithPayment.input";
import type { PaymentDetails } from "../../domain/PaymentDetails";
import {
  toDomain,
  toDTO,
} from "../../infrastructure/mappers/paymentdetails.mapper";
import type { PaymentDetailsRepository } from "../../infrastructure/repository/paymentDetails.repository";
import type { PaymentDetailsDTO } from "../dto/paymentDetails.types";
import type { CreditAccount } from "@prisma/client";
import type { PaymentDetailsFactory } from "../../domain/PaymentDetailsFactory";

export class PaymentDetailsService {
  constructor(private readonly repo: PaymentDetailsRepository,
    private readonly factory: PaymentDetailsFactory
  ) {}


  //TODO [CreateCreditAccountWithPayment]
  async create(
    input: CreateCreditAccountWithPaymentInput,
  ): Promise<PaymentDetails> {
   
    const payment = this.factory.createNew({
      amountMoney: amountMoney,
      paymentMethod: paymentMethod,
      paymentDate: new Date(),
      paymentStatus: "PENDING",
      creditAccount: creditAccount,
      reference: reference,
    });

    const saved = await this.repo.save(payment); /

    return saved; 
  }
  async createPaymentDetails() {}

  async changePaymentStatus() {}

  async findById(id: string): Promise<PaymentDetailsDTO> {
    const paymentDetails = await this.paymentrepo.findById(id);
    if (!paymentDetails) throw new Error("Details not found");
    return toDTO(toDomain(paymentDetails));
  }
}

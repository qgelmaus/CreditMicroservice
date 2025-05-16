import type { PaymentDetails } from "../../domain/PaymentDetails.ts";
import { toDomain } from "../mappers/paymentdetails.mapper.ts";
import { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types.ts";
import type { PrismaClient } from "@prisma/client/scripts/default-index.js";
import type { PaymentStatus } from "apps/payment-service/src/prisma/generated/client/index.js";

export class PaymentDetailsRepository {
  constructor(private prisma: PrismaClient) {}

  async create(payment: PaymentDetails): Promise<PaymentDetails> {
    const persisted = await this.prisma.paymentDetails.create({
      data: {
        email: payment.getEmail(),
        amountMoney: payment.getAmount(),
        paymentMethod: payment.getPaymentMethod(),
        paymentStatus: payment.getStatusRaw(),
        reference: payment.getReference(),
        paymentDate: payment.getPaymentDate(),
      },
    });

    return toDomain(persisted);
  }

  async findById(id: string) {
    return await this.prisma.paymentDetails.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.paymentDetails.findMany({
      orderBy: { paymentDate: "desc" },
    });
  }

  async updateStatus(input: { id: string; newPaymentStatus: PaymentStatus }) {
    return await this.prisma.paymentDetails.update({
      where: { id: input.id },
      data: {
        paymentStatus: input.newPaymentStatus,
      },
    });
  }
}

import type {
  PrismaClient,
  PaymentStatus,
  PaymentMethod,
  PaymentDetails as PrismaPayment,
} from "@prisma/client";
import type { PaymentDetails } from "../../domain/PaymentDetails";
import { toDomain } from "../mappers/paymentdetails.mapper";
import { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types";

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

  async updateStatus(id: string, newPaymentStatus: PaymentStatus) {
    return await this.prisma.paymentDetails.update({
      where: { id },
      data: {
        paymentStatus: newPaymentStatus,
      },
    });
  }
}

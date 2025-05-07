import {
  type PaymentStatus,
  type Prisma,
  PrismaClient,
  type PaymentDetails as PrismaPayment,
} from "@prisma/client";
import type { PaymentDetailsDTO } from "../../app/dto/paymentDetails.types";

const prisma = new PrismaClient();

export class PaymentDetailsRepository {
  async create(data: Prisma.PaymentDetailsCreateInput) {
    return await prisma.paymentDetails.create({ data });
  }

  async findById(id: string) {
    return await prisma.paymentDetails.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await prisma.paymentDetails.findMany({
      orderBy: { paymentDate: "desc" },
    });
  }

  async updateStatus(id: string, newPaymentStatus: PaymentStatus) {
    return await prisma.paymentDetails.update({
      where: { id },
      data: {
        paymentStatus: newPaymentStatus,
      },
    });
  }

  toPaymentDetailsDTO(paymentDetails: PrismaPayment): PaymentDetailsDTO {
    return {
      id: paymentDetails.id,
      creditAccount: paymentDetails.creditAccountId,
      amountMoney: paymentDetails.amountMoney,
      paymentMethod: paymentDetails.paymentMethod,
      paymentStatus: paymentDetails.paymentStatus,
      paymentDate: paymentDetails.paymentDate,
      reference: paymentDetails.reference,
    };
  }
}

import {
  type PrismaClient,
  TransactionType,
} from "apps/credit-service/src/prisma/generated/client/index.js";

export class CreditTransferRepository {
  constructor(private prisma: PrismaClient) {}

  async logPurchase(creditAccountId: number, credits: number, money: number) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.PURCHASE,
        credits: credits,
        money: money,
      },
    });
  }

  async saveCreditTransfer(
    transactionOutId: number,
    tranasctionInId: number,
    amount: number
  ) {
    return await this.prisma.creditTransfer.create({
      data: {
        fromTransaction: {
          connect: { id: transactionOutId },
        },
        toTransaction: {
          connect: { id: tranasctionInId },
        },
        amount,
      },
    });
  }
}

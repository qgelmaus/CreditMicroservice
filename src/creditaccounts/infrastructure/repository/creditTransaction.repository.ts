import { PrismaClient, TransactionType } from "@prisma/client";

const prisma = new PrismaClient();

export class CreditTransactionRepository {
  async logPurchase(
    creditAccountId: number,
    credits: number,
    money: number,
    note?: string
  ) {
    return await prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.PURCHASE,
        credits: credits,
        money: money,
        note: note ?? "CreditAccount created",
      },
    });
  }

  async logCreditUsed(
    creditAccountId: number,
    credits: number,
    money: number,
    note?: string
  ) {
    return await prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.USAGE,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async logRefund(creditAccountId: number, amount: number, note?: string) {
    return await prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.REFUND,
        credits: amount,
        money: amount,
        note,
      },
    });
  }

  async getTransactionsForAccount(creditAccountId: number) {
    return await prisma.creditTransaction.findMany({
      where: { creditAccountId },
      orderBy: { createdAt: "desc" },
    });
  }
}

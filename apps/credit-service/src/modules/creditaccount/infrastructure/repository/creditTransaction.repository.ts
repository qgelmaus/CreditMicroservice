import {
  PrismaClient,
  TransactionType,
} from "../../../../prisma/generated/client";

export class CreditTransactionRepository {
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

  async logCreditUsed(
    creditAccountId: number,
    credits: number,
    money: number,
    note: string,
  ) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.USAGE,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async logCreditRefund(
    creditAccountId: number,
    credits: number,
    money: number,
    note: string,
  ) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.REFUND,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async logCreditTransferIn(
    creditAccountId: number,
    credits: number,
    money: number,
    note: string,
  ) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.TRANSFER_IN,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async logCreditTransferOut(
    creditAccountId: number,
    credits: number,
    money: number,
    note: string,
  ) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.TRANSFER_OUT,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async logMoneyRefund(
    creditAccountId: number,
    credits: number,
    money: number,
    note: string,
  ) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.REFUND,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async logNullification(
    creditAccountId: number,
    credits: number,
    money: number,
    note: string,
  ) {
    return await this.prisma.creditTransaction.create({
      data: {
        creditAccountId,
        type: TransactionType.NULLIFICATION,
        credits: credits,
        money: money,
        note,
      },
    });
  }

  async getTransactionsForAccount(accountId: number) {
    return await this.prisma.creditTransaction.findMany({
      where: { creditAccountId: accountId },
      orderBy: { createdAt: "desc" },
      include: { creditAccount: true },
    });
  }

  async findAll() {
    return await this.prisma.creditTransaction.findMany({
      orderBy: { createdAt: "desc" },
      include: { creditAccount: true },
    });
  }
}

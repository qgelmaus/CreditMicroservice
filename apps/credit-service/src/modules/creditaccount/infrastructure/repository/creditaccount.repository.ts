import { Prisma, PrismaClient } from "../../../../prisma/generated/client";
import { type CreditAccount, PrepaidAccount } from "../../domain/CreditAccount";

export class CreditAccountRepository {
  constructor(private prisma: PrismaClient) {}
  async create(data: Prisma.CreditAccountCreateInput) {
    return await this.prisma.creditAccount.create({ data });
  }

  async findByCreditCode(code: string) {
    return await this.prisma.creditAccount.findUnique({
      where: { creditCode: code },
      include: { transactions: true },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.creditAccount.findMany({
      where: { email: email },
      include: { transactions: true },
    });
  }

  async findAll() {
    return await this.prisma.creditAccount.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async updateAfterUsage(
    creditCode: string,
    newCreditAmount: number,
    newMoneyAmount: number,
    newTreatmentCount: number
  ) {
    return await this.prisma.creditAccount.update({
      where: { creditCode },
      data: {
        availableCredits: newCreditAmount,
        availableMoney: newMoneyAmount,
        treatmentCount: newTreatmentCount,
      },
    });
  }

  async updateState(account: CreditAccount) {
    const baseUpdate = {
      availableCredits: account.availableCredits,
      availableMoney: account.availableMoney,
      isActive: account.isActive,
    };

    if (account instanceof PrepaidAccount) {
      return await this.prisma.creditAccount.update({
        where: { creditCode: account.creditCode },
        data: {
          ...baseUpdate,
          treatmentCount: account.treatmentCount,
        },
      });
    }
    return await this.prisma.creditAccount.update({
      where: { creditCode: account.creditCode },
      data: baseUpdate,
    });
  }
}

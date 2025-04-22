import { PrismaClient } from "@prisma/client";
import type { CreditAccount as PrismaAccount } from "@prisma/client";
import type { CreditAccountDTO } from "../app/dto/creditaccount.types";

const prisma = new PrismaClient();

export class CreditAccountRepository {
  async create(data: CreditAccountDTO) {
    return await prisma.creditAccount.create({ data });
  }

  async findByCreditCode(code: string) {
    return await prisma.creditAccount.findUnique({
      where: { creditCode: code },
    });
  }

  async findAll() {
    return await prisma.creditAccount.findMany({
      orderBy: { dateCreated: "desc" },
    });
  }

  async updateAvailableCredits(
    creditCode: string,
    newCreditAmount: number,
    newMoneyAmount: number
  ) {
    return await prisma.creditAccount.update({
      where: { creditCode },
      data: {
        availableCredits: newCreditAmount,
        availableMoney: newMoneyAmount,
      },
    });
  }

  toCreditAccountDTO(account: PrismaAccount): CreditAccountDTO {
    return {
      creditCode: account.creditCode,
      type: account.type,
      originalCredits: account.originalCredits,
      originalMoney: account.originalMoney,
      availableCredits: account.availableCredits,
      availableMoney: account.availableMoney,
      email: account.email,
      dateCreated: account.dateCreated,
      dateExpired: account.dateExpired,
      treatmentCount: account.treatmentCount ?? undefined,
      discountPercentage: account.discountPercentage ?? undefined,
    };
  }
}

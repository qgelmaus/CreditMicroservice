import { PrismaClient } from "@prisma/client";
import type { Prisma, CreditAccount as PrismaAccount } from "@prisma/client";

import type { CreditAccountDTO } from "../../app/dto/creditaccount.types";
import { type CreditAccount, PrepaidAccount } from "../../domain/CreditAccount";

const prisma = new PrismaClient();

export class CreditAccountRepository {
	async create(data: Prisma.CreditAccountCreateInput) {
		return await prisma.creditAccount.create({ data });
	}

	async findByCreditCode(code: string) {
		return await prisma.creditAccount.findUnique({
			where: { creditCode: code },
			include: { transactions: true },
		});
	}

	async findByEmail(email: string) {
		return await prisma.creditAccount.findMany({
			where: { email: email },
			include: { transactions: true },
		});
	}

	async findAll() {
		return await prisma.creditAccount.findMany({
			orderBy: { createdAt: "desc" },
		});
	}

	async updateAfterUsage(
		creditCode: string,
		newCreditAmount: number,
		newMoneyAmount: number,
		newTreatmentCount: number,
	) {
		return await prisma.creditAccount.update({
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
			return await prisma.creditAccount.update({
				where: { creditCode: account.creditCode },
				data: {
					...baseUpdate,
					treatmentCount: account.treatmentCount,
				},
			});
		}
		return await prisma.creditAccount.update({
			where: { creditCode: account.creditCode },
			data: baseUpdate,
		});
	}

	toCreditAccountDTO(account: PrismaAccount): CreditAccountDTO {
		return {
			id: account.id,
			creditCode: account.creditCode,
			type: account.type,
			originalCredits: account.originalCredits,
			originalMoney: account.originalMoney,
			availableCredits: account.availableCredits,
			availableMoney: account.availableMoney,
			email: account.email,
			isActive: account.isActive,
			createdAt: account.createdAt,
			expiresAt: account.expiresAt,
			treatmentCount: account.treatmentCount ?? undefined,
			discountPercentage: account.discountPercentage ?? undefined,
		};
	}
}

import { PrismaClient, TransactionType } from "@prisma/client";

const prisma = new PrismaClient();

export class CreditTransferRepository {
	async logPurchase(creditAccountId: number, credits: number, money: number) {
		return await prisma.creditTransaction.create({
			data: {
				creditAccountId,
				type: TransactionType.PURCHASE,
				credits: credits,
				money: money,
			},
		});
	}

	async saveCreditTransfer(
		fromAccountId: number,
		toAccountId: number,
		amount: number,
	) {
		return await prisma.creditTransfer.create({
			data: {
				fromAccountId,
				toAccountId,
				amount: amount,
			},
		});
	}
}

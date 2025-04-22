import { PrismaClient, TransactionType } from "@prisma/client";

const prisma = new PrismaClient();

export class CreditTransactionRepository {
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

	async logCreditUsed(
		creditAccountId: number,
		credits: number,
		money: number,
		note: string,
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

	async logCreditRefund(
		creditAccountId: number,
		credits: number,
		money: number,
		note: string,
	) {
		return await prisma.creditTransaction.create({
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
		return await prisma.creditTransaction.create({
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
		return await prisma.creditTransaction.create({
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
		return await prisma.creditTransaction.create({
			data: {
				creditAccountId,
				type: TransactionType.REFUND,
				credits: credits,
				money: money,
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

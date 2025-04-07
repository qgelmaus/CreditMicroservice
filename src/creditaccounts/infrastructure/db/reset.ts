import { prisma } from "./client";

export const resetDatabase = async () => {
	await prisma.creditTransfer.deleteMany();
	await prisma.creditTransactions.deleteMany();
	await prisma.creditAccounts.deleteMany();
};

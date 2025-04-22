import { prisma } from "./client";

export const resetDatabase = async () => {
	await prisma.creditAccount.deleteMany();
};

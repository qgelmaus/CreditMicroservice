import { prisma } from "../db/client";
import { logger } from "../utils/logger/logger";
import { CreditAccountType } from "../utils/types/creditaccount.types";

interface CreateCreditAccountInput {
	email: string;
	type: keyof typeof CreditAccountType;
	originalCredits: number;
	originalMoney: number;
}

export const getCreditAccounts = async () => {
	const accounts = await prisma.creditAccounts.findMany();
	logger.info({ count: accounts.length }, "Hentede creditAccounts");
	return accounts;
};

export const createCreditAccount = async ({
	email,
	type,
	originalCredits,
	originalMoney,
}: CreateCreditAccountInput) => {
	if (!(type in CreditAccountType)) {
		throw new Error(`Invalid account type: ${type}`);
	}

	const now = new Date();
	const dateCreated = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
	const dateExpired = new Date(dateCreated);
	dateExpired.setFullYear(dateExpired.getFullYear() + 3);

	const creditCode = await generateUniqueCreditCode();

	const savedType = CreditAccountType[type];

	const newAccount = await prisma.creditAccounts.create({
		data: {
			email,
			creditCode,
			type: savedType,
			originalCredits,
			originalMoney,
			availableCredits: originalCredits,
			availableMoney: originalMoney,
			dateCreated: dateCreated,
			dateExpired: dateExpired,
		},
	});
	logger.info({ newAccount }, "Oprettet creditaccount");
	return newAccount;
};

export const deleteCreditAccount = async (id: number) => {
	const account = await prisma.creditAccounts.findUnique({ where: { id } });
	if (!account) return null;
	logger.info({ count: account.id }, "Deleting creditaccount");
	await prisma.creditAccounts.delete({ where: { id } });
	return account;
};

function generateCreditCode(): string {
	const randomDigits = Math.floor(1000000 + Math.random() * 9000000); // 7 digits
	return `RR${randomDigits}`;
}

async function generateUniqueCreditCode(): Promise<string> {
	let code = generateCreditCode();
	let isUnique = false;

	while (!isUnique) {
		code = generateCreditCode();
		const existing = await prisma.creditAccounts.findUnique({
			where: { creditCode: code },
		});
		if (!existing) isUnique = true;
	}

	return code;
}

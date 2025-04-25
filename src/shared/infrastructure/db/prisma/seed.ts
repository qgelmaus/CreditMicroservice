import {
	PrismaClient,
	CreditAccountType,
	TransactionType,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log("🌱 Seeding database...");

	const now = new Date();
	const inThreeYears = new Date();
	inThreeYears.setFullYear(now.getFullYear() + 3);

	// 🎁 GiftAccount
	const giftAccount = await prisma.creditAccount.create({
		data: {
			creditCode: "RR1000001",
			type: CreditAccountType.GIFT_CARD,
			originalCredits: 500,
			originalMoney: 500,
			availableCredits: 500,
			availableMoney: 500,
			email: "gavekort@kunde.dk",
			isActive: true,
			createdAt: now,
			expiresAt: inThreeYears,
		},
	});

	await prisma.creditTransaction.create({
		data: {
			creditAccountId: giftAccount.id,
			type: TransactionType.PURCHASE,
			credits: 500,
			money: 500,
			note: "Initial purchase",
		},
	});

	// 💳 PrepaidAccount (5 behandlinger, 10% rabat)
	const prepaid5 = await prisma.creditAccount.create({
		data: {
			creditCode: "RR2000001",
			type: CreditAccountType.PREPAID_CARD,
			originalCredits: 5,
			originalMoney: 1125,
			availableCredits: 5,
			availableMoney: 1125,
			email: "prepaid5@kunde.dk",
			isActive: true,
			treatmentCount: 5,
			discountPercentage: 10,
			createdAt: now,
			expiresAt: inThreeYears,
		},
	});

	await prisma.creditTransaction.create({
		data: {
			creditAccountId: prepaid5.id,
			type: TransactionType.PURCHASE,
			credits: 5,
			money: 1125,
			note: "Initial purchase",
		},
	});

	// 💳 PrepaidAccount (10 behandlinger, 20% rabat)
	const prepaid10 = await prisma.creditAccount.create({
		data: {
			creditCode: "RR2000002",
			type: CreditAccountType.PREPAID_CARD,
			originalCredits: 10,
			originalMoney: 2000,
			availableCredits: 10,
			availableMoney: 2000,
			email: "prepaid10@kunde.dk",
			isActive: true,
			treatmentCount: 10,
			discountPercentage: 20,
			createdAt: now,
			expiresAt: inThreeYears,
		},
	});

	await prisma.creditTransaction.create({
		data: {
			creditAccountId: prepaid10.id,
			type: TransactionType.PURCHASE,
			credits: 10,
			money: 2000,
			note: "Initial purchase",
		},
	});

	console.log("✅ Done seeding.");
}

main()
	.catch((e) => {
		console.error("❌ Seeding failed", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

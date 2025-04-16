import { PrismaClient, CreditAccountType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log("Seeding database...");

	const now = new Date();
	const inThreeYears = new Date();
	inThreeYears.setFullYear(now.getFullYear() + 3);

	// 🎁 GiftAccount eksempel
	await prisma.creditAccount.create({
		data: {
			creditCode: "RR1000001",
			type: CreditAccountType.GIFT_CARD,
			originalCredits: 500,
			originalMoney: 500,
			availableCredits: 500,
			availableMoney: 500,
			email: "gavekort@kunde.dk",
			dateCreated: now,
			dateExpired: inThreeYears,
		},
	});

	// 💳 PrepaidAccount eksempel (5 behandlinger, 10% rabat)
	await prisma.creditAccount.create({
		data: {
			creditCode: "RR2000001",
			type: CreditAccountType.PREPAID_CARD,
			originalCredits: 5,
			originalMoney: 1125, // 5 * 250 * 0.9
			availableCredits: 5,
			availableMoney: 1125,
			email: "prepaid5@kunde.dk",
			treatmentCount: 5,
			discountPercentage: 10,
			dateCreated: now,
			dateExpired: inThreeYears,
		},
	});

	// 💳 PrepaidAccount eksempel (10 behandlinger, 20% rabat)
	await prisma.creditAccount.create({
		data: {
			creditCode: "RR2000002",
			type: CreditAccountType.PREPAID_CARD,
			originalCredits: 10,
			originalMoney: 2000, // 10 * 250 * 0.8
			availableCredits: 10,
			availableMoney: 2000,
			email: "prepaid10@kunde.dk",
			treatmentCount: 10,
			discountPercentage: 20,
			dateCreated: now,
			dateExpired: inThreeYears,
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

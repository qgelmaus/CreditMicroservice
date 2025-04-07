import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	// Ryd databasen
	await prisma.creditTransfer.deleteMany();
	await prisma.creditTransactions.deleteMany();
	await prisma.creditAccounts.deleteMany();

	// Opret konti
	const accounts = await prisma.creditAccounts.createMany({
		data: [
			{
				email: "alice@example.com",
				creditCode: "RR0000000",
				type: "GIFT_CARD",
				originalCredits: 100,
				originalMoney: 1000,
				availableCredits: 80,
				availableMoney: 850,
				dateCreated: new Date(),
				dateExpired: new Date("2026-01-01"),
			},
			{
				email: "bob@example.com",
				creditCode: "RR0000001",
				type: "GIFT_CARD",
				originalCredits: 200,
				originalMoney: 2000,
				availableCredits: 150,
				availableMoney: 1700,
				dateCreated: new Date(),
				dateExpired: new Date("2026-01-01"),
			},
			{
				email: "carla@example.com",
				creditCode: "RR0000002",
				type: "PREPAID_CARD",
				originalCredits: 500,
				originalMoney: 5000,
				availableCredits: 500,
				availableMoney: 5000,
				dateCreated: new Date(),
				dateExpired: new Date("2026-01-01"),
			},
		],
	});

	const [alice, bob, carla] = await prisma.creditAccounts.findMany({
		orderBy: { id: "asc" },
	});

	await prisma.creditTransactions.createMany({
		data: [
			{
				creditAccountId: alice.id,
				type: "purchase",
				credits: -10,
				money: -100,
				note: "Bought service A",
			},
			{
				creditAccountId: bob.id,
				type: "deposit",
				credits: 50,
				money: 500,
				note: "Added funds",
			},
			{
				creditAccountId: carla.id,
				type: "bonus",
				credits: 25,
				money: 0,
				note: "Welcome bonus",
			},
		],
	});

	const fromTx = await prisma.creditTransactions.create({
		data: {
			creditAccountId: bob.id,
			type: "transfer_out",
			credits: -20,
			money: -200,
			note: "Transfer to Alice",
		},
	});

	const toTx = await prisma.creditTransactions.create({
		data: {
			creditAccountId: alice.id,
			type: "transfer_in",
			credits: 20,
			money: 200,
			note: "Transfer from Bob",
		},
	});

	await prisma.creditTransfer.create({
		data: {
			fromCreditTransactionId: fromTx.id,
			toCreditTransactionId: toTx.id,
		},
	});

	console.log("seed complete");
}

main()
	.catch((e) => {
		console.error("Seed error:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

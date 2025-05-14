import { PrismaClient } from "@prisma/client";
import { CreditAccountRepository } from "../../modules/creditaccount/infrastructure/repository/creditaccount.repository";
import { CreditTransactionRepository } from "../../modules/creditaccount/infrastructure/repository/creditTransaction.repository";
import { CreditTransferRepository } from "../../modules/creditaccount/infrastructure/repository/creditTransfer.repository";
import { PaymentDetailsRepository } from "../../modules/paymentDetails/infrastructure/repository/paymentDetails.repository";
import { CreditAccountService } from "../../modules/creditaccount/app/services/creditAccount.service";
import { CreditTransactionService } from "../../modules/creditaccount/app/services/creditTransactions.service";
import { PaymentDetailsService } from "../../modules/paymentDetails/app/services/paymentDetails.service";

export function buildContext() {
	const prisma = new PrismaClient();

	const creditAccountRepo = new CreditAccountRepository(prisma);
	const transactionRepo = new CreditTransactionRepository(prisma);
	const transferRepo = new CreditTransferRepository(prisma);
	const paymentDetailsRepository = new PaymentDetailsRepository(prisma);

	const creditAccountService = new CreditAccountService(
		creditAccountRepo,
		transactionRepo,
		transferRepo,
	);

	const creditTransactionService = new CreditTransactionService(
		transactionRepo,
	);

	const paymentDetailsService = new PaymentDetailsService(
		paymentDetailsRepository,
	);

	return {
		prisma,
		user: { id: "FAKE-USER-ID" },
		services: {
			creditAccount: creditAccountService,
			creditTransaction: creditTransactionService,
			paymentDetails: paymentDetailsService,
		},
	};
}

export type Context = ReturnType<typeof buildContext>;

import { PrismaClient } from "@prisma/client";
import { CreditAccountRepository } from "../../../../credit-service/src/modules/creditaccount/infrastructure/repository/creditaccount.repository";
import { CreditTransactionRepository } from "../../../../credit-service/src/modules/creditaccount/infrastructure/repository/creditTransaction.repository";
import { CreditTransferRepository } from "../../../../credit-service/src/modules/creditaccount/infrastructure/repository/creditTransfer.repository";
import { PaymentDetailsRepository } from "../../../../payment-service/src/modules/paymentDetails/infrastructure/repository/paymentDetails.repository";
import { CreditAccountService } from "../../../../credit-service/src/modules/creditaccount/app/services/creditAccount.service";
import { CreditTransactionService } from "../../../../credit-service/src/modules/creditaccount/app/services/creditTransactions.service";
import { PaymentDetailsService } from "../../../../payment-service/src/modules/paymentDetails/app/services/paymentDetails.service";

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

// apps/credit-service/src/context/buildContext.ts
import { creditDb as prisma } from "../prisma/client";
import { CreditAccountService } from "../modules/creditaccount/app/services/creditAccount.service";
import { CreditTransactionService } from "../modules/creditaccount/app/services/creditTransactions.service";
import { CreditAccountRepository } from "../modules/creditaccount/infrastructure/repository/creditaccount.repository";
import { CreditTransactionRepository } from "../modules/creditaccount/infrastructure/repository/creditTransaction.repository";
import { CreditTransferRepository } from "../modules/creditaccount/infrastructure/repository/creditTransfer.repository";
import { RabbitEventPublisher } from "../modules/creditaccount/infrastructure/messaging/rabbit/RabbitEventPublisher";

export const buildContext = async () => {
  const accountRepo = new CreditAccountRepository(prisma);
  const transactionRepo = new CreditTransactionRepository(prisma);
  const transferRepo = new CreditTransferRepository(prisma);
  const eventPublisher = new RabbitEventPublisher();

  await eventPublisher.connect();

  const creditAccountService = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    eventPublisher
  );
  const creditTransactionService = new CreditTransactionService(
    transactionRepo
  );

  return {
    prisma,
    creditAccountService,
    creditTransactionService,
    user: {
      id: "FAKE-USER-ID",
    },
  };
};

export type Context = Awaited<ReturnType<typeof buildContext>>;

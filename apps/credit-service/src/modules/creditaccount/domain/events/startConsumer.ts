import { RabbitEventConsumer } from "packages/rabbitmq/src/index.ts";
import { CreditAccountService } from "../../app/services/creditAccount.service.ts";
import { CreditAccountRepository } from "../../infrastructure/repository/creditaccount.repository.ts";
import { CreditTransactionRepository } from "../../infrastructure/repository/creditTransaction.repository.ts";
import { CreditTransferRepository } from "../../infrastructure/repository/creditTransfer.repository.ts";
import { creditDb as prisma } from "apps/credit-service/src/prisma/client.ts";

export const startConsumer = async () => {
  const accountRepo = new CreditAccountRepository(prisma);
  const transactionRepo = new CreditTransactionRepository(prisma);
  const transferRepo = new CreditTransferRepository(prisma);

  const dummyPublisher = { publish: async () => {} };

  const accountService = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    dummyPublisher
  );

  const consumer = new RabbitEventConsumer(
    "payment.completed",
    async (event) => {
      const { reference } = event.payload;

      if (!reference.startsWith("CREDIT:")) return;

      const creditCode = reference.replace("CREDIT:", "");

      await accountService.activateAccount(creditCode);
    }
  );

  await consumer.start();
};

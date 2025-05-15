import { creditDb as prisma } from "../prisma/client.ts";
import { CreditAccountService } from "../modules/creditaccount/app/services/creditAccount.service.ts";
import { CreditTransactionService } from "../modules/creditaccount/app/services/creditTransactions.service.ts";
import { CreditAccountRepository } from "../modules/creditaccount/infrastructure/repository/creditaccount.repository.ts";
import { CreditTransactionRepository } from "../modules/creditaccount/infrastructure/repository/creditTransaction.repository.ts";
import { CreditTransferRepository } from "../modules/creditaccount/infrastructure/repository/creditTransfer.repository.ts";
import { RabbitEventPublisher } from "packages/rabbitmq/src/index.ts";

export const buildContext = async (ctx: any) => {
  console.log("🧪 ctx.request.body:", ctx?.request?.body);
  const isIntrospection =
    ctx?.request?.body?.query?.includes("__schema") ?? false;

  const accountRepo = new CreditAccountRepository(prisma);
  const transactionRepo = new CreditTransactionRepository(prisma);
  const transferRepo = new CreditTransferRepository(prisma);
  const eventPublisher = new RabbitEventPublisher();

  if (!isIntrospection) {
    try {
      await eventPublisher.connect();
    } catch (err) {
      console.error("❌ RabbitMQ connection failed:", err);
      throw err;
    }
  }

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

import { paymentDb as prisma } from "../prisma/client.ts";
import { PaymentDetailsRepository } from "../modules/paymentDetails/infrastructure/repository/paymentDetails.repository.ts";
import { PaymentDetailsService } from "../modules/paymentDetails/app/services/paymentDetails.service.ts";
import { RabbitEventPublisher } from "packages/rabbitmq/src/index.ts";

export const buildContext = async (ctx: any) => {
  const isIntrospection =
    ctx?.request?.body?.query?.includes("__schema") ?? false;
  const skipRabbit = process.env.SKIP_RABBIT === "true";

  const paymentRepo = new PaymentDetailsRepository(prisma);
  const eventPublisher = new RabbitEventPublisher();

  if (!isIntrospection && !skipRabbit) {
    try {
      await eventPublisher.connect();
    } catch (err) {
      console.error("❌ RabbitMQ connection failed:", err);
      throw err;
    }
  }

  const paymentDetailsService = new PaymentDetailsService(
    paymentRepo,
    eventPublisher
  );

  return {
    prisma,
    paymentDetailsService,
  };
};

export type Context = Awaited<ReturnType<typeof buildContext>>;

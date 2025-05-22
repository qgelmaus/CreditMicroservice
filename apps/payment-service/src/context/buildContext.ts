import { services } from "./services.ts";

export const buildContext = async (ctx: any) => {
  const isIntrospection =
    ctx?.request?.body?.query?.includes("__schema") ?? false;
  const skipRabbit = process.env.SKIP_RABBIT === "true";

  if (!isIntrospection && !skipRabbit) {
    try {
      await services.eventPublisher.connect();
      console.log("RabbitMQ connected");
    } catch (err) {
      console.error("RabbitMQ connection failed:", err);
      throw err;
    }
  }

  return {
    prisma: services.paymentRepo, // hvis du stadig vil have det med
    paymentDetailsService: services.paymentDetailsService,
  };
};

export type Context = Awaited<ReturnType<typeof buildContext>>;

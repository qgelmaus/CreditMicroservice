import { prisma } from "../prisma/client";
import { PaymentDetailsRepository } from "../modules/paymentDetails/infrastructure/repository/paymentDetails.repository";
import { PaymentDetailsService } from "../modules/paymentDetails/app/services/paymentDetails.service";
export const buildContext = async () => {
  const paymentRepo = new PaymentDetailsRepository(prisma);
  const paymentDetailsService = new PaymentDetailsService(paymentRepo);

  return {
    prisma,
    paymentDetailsService,
  };
};

export type Context = Awaited<ReturnType<typeof buildContext>>;

import { paymentDb as prisma } from "../prisma/client.ts";
import { PaymentDetailsRepository } from "../modules/paymentDetails/infrastructure/repository/paymentDetails.repository.ts";
import { PaymentDetailsService } from "../modules/paymentDetails/app/services/paymentDetails.service.ts";
import { RabbitEventPublisher } from "packages/rabbitmq/src/index.ts";

const paymentRepo = new PaymentDetailsRepository(prisma);
const eventPublisher = new RabbitEventPublisher();

export const services = {
  paymentRepo,
  eventPublisher,
  paymentDetailsService: new PaymentDetailsService(paymentRepo, eventPublisher),
};

// apps/credit-service/src/infrastructure/prisma/client.ts
import { PrismaClient as PaymentPrismaClient } from "./generated/client";

export const paymentDb = new PaymentPrismaClient();

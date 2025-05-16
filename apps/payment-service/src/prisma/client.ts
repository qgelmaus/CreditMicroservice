// apps/credit-service/src/infrastructure/prisma/client.ts
import { PrismaClient as PaymentPrismaClient } from "./generated/client/index.js";

export const paymentDb = new PaymentPrismaClient();

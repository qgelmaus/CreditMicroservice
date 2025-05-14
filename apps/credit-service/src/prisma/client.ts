// apps/credit-service/src/infrastructure/prisma/client.ts
import { PrismaClient as CreditPrismaClient } from "./generated/client";

export const creditDb = new CreditPrismaClient();

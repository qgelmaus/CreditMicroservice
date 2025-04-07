import { PrismaClient as ProdClient } from "@prisma/client";
import { PrismaClient as TestClient } from "./../../node_modules/.prisma/test-client";

const isTest = process.env.NODE_ENV === "test";
const client = isTest ? new TestClient() : new ProdClient();

export const prisma: ProdClient = client as ProdClient;

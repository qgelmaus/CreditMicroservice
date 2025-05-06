import { prisma } from "./client";

export const resetDatabase = async () => {
  await prisma.creditTransaction.deleteMany();
  await prisma.creditTransfer.deleteMany();
  await prisma.paymentDetails.deleteMany();
  await prisma.creditAccount.deleteMany();
};

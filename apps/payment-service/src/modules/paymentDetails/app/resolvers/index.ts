import type { Resolvers } from "../../../../shared/types/codegen.types.ts";
import { createPayment } from "../commands/createPaymentDetails.ts";

export const paymentResolvers: Resolvers = {
  Mutation: {
    createPayment,
  },

  Query: {},
};

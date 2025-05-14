import type { Resolvers } from "../../../../shared/types/codegen.types";
import { createPayment } from "../commands/createPaymentDetails";

export const paymentResolvers: Resolvers = {
  PaymentDetails: {},

  Mutation: {
    createPayment,
  },

  Query: {},
};

import type { Resolvers } from "../../../../shared/types/codegen.types.ts";
import { changeStatus } from "../commands/changeStatus.ts";
import { createPayment } from "../commands/createPaymentDetails.ts";

export const paymentResolvers: Resolvers = {
  Mutation: {
    createPayment,
    changeStatus,
  },

  Query: {},
};

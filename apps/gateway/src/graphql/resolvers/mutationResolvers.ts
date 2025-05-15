import { creditMutations } from "./createCreditAccountWithPayment.ts";

export const localResolvers = {
  Mutation: {
    ...creditMutations,
  },
};

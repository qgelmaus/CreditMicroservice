//src/modules/creditaccount/graphql/schema/accounts/resolvers.ts
import { CreditAccountService } from "../../../app/services/creditAccount.service";

const service = new CreditAccountService();

export const creditAccountResolver = {
  CreditAccount: {
    __resolveType(obj: any) {
      if (obj.type === "GIFT_CARD") return "GiftAccount";
      if (obj.type === "PREPAID_CARD") return "PrepaidAccount";
      return null;
    },
  },
  Mutation: {
    useCredits: async (_: any, { input }: any) => {
      const { creditCode, credits, money, note } = input;
      return await service.useCredits(creditCode, credits, money, note);
    },

    refundCredits: async (_: any, { input }: any) => {
      const { creditCode, credits, money, note } = input;
      return await service.refundCredits(creditCode, credits, money, note);
    },

    refundMoney: async (_: any, { input }: any) => {
      const { creditCode, money, note } = input;
      return await service.refundMoney(creditCode, money, note);
    },

    createGiftAccount: async (_: any, { input }: any) => {
      const { purchaseAmount, email } = input;
      return await service.createGiftAccount(purchaseAmount, email);
    },

    createPrepaidAccount: async (_: any, { input }: any) => {
      const { treatmentCount, pricePerTreatment, email } = input;
      return await service.createPrepaidAccount(
        treatmentCount,
        pricePerTreatment,
        email
      );
    },
  },

  Query: {
    creditAccountByCode: async (_: any, { code }: any) => {
      return await service.findByCode(code);
    },

    allCreditAccounts: async () => {
      return await service.findAll();
    },
  },
};

//src/modules/creditaccount/graphql/schema/accounts/resolvers.ts
import { CreditAccountService } from "../../../app/services/creditAccount.service";

const service = new CreditAccountService();

export const creditAccountResolver = {
	CreditAccount: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		__resolveType(obj: any) {
			if (obj.type === "GIFT_CARD") return "GiftAccount";
			if (obj.type === "PREPAID_CARD") return "PrepaidAccount";
			return null;
		},
	},
	Mutation: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		useCredits: async (_: any, { input }: any) => {
			const { creditCode, cost, note } = input;
			return await service.useCredits(creditCode, cost, note);
		},

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		refundCredits: async (_: any, { input }: any) => {
			const { creditCode, cost, note } = input;
			return await service.refundCredits(creditCode, cost, note);
		},

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		transferCredits: async (_: any, { input }: any) => {
			const { fromCode, toCode, amount, note } = input;
			return await service.transferCredits(fromCode, toCode, amount, note);
		},

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		refundMoney: async (_: any, { input }: any) => {
			const { creditCode, money, note } = input;
			return await service.refundMoney(creditCode, money, note);
		},

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		createGiftAccount: async (_: any, { input }: any) => {
			const { purchaseAmount, email } = input;
			return await service.createGiftAccount(purchaseAmount, email);
		},

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		createPrepaidAccount: async (_: any, { input }: any) => {
			const { treatmentCount, pricePerTreatment, email } = input;
			return await service.createPrepaidAccount(
				treatmentCount,
				pricePerTreatment,
				email,
			);
		},
	},

	Query: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		creditAccountByCode: async (_: any, { code }: any) => {
			return await service.findByCode(code);
		},

		allCreditAccounts: async () => {
			return await service.findAll();
		},
	},
};

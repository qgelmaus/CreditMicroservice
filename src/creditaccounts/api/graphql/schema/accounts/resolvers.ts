import { GiftAccount } from "../../../../domain/CreditAccount";
import { PrepaidAccount } from "../../../../domain/CreditAccount";
import { CreditAccountService } from "../../../../app/services/creditAccount.service";

const service = new CreditAccountService();

export const creditAccountResolver = {
	Mutation: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		createGiftAccount: async (_: any, { input }: any) => {
			const account = new GiftAccount(input.purchaseAmount, input.email);
			return await service.create(account);
		},

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		createPrepaidAccount: async (_: any, { input }: any) => {
			try {
				const { treatmentCount, pricePerTreatment, email } = input;

				if (![5, 10].includes(treatmentCount)) {
					throw new Error(
						"PrepaidAccount can only be created for 5 or 10 treatments.",
					);
				}

				const account = new PrepaidAccount(
					treatmentCount,
					pricePerTreatment,
					email,
				);
				return await service.create(account);
			} catch (err) {
				console.error("ERROR", err);
				throw err;
			}
		},

		/*	useCredits: async (_: any, { input }: any) => {
			const { creditCode, cost } = input;
			const account = await service.use(creditCode, cost);
			if (!account) throw new Error("No account connected to this creditcode");
			return await service.use(account, cost);
		}, */
	},

	Query: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		creditAccount: async (_: any, { code }: any) => {
			return await service.findByCode(code);
		},
		creditAccounts: async () => {
			return await service.findAll();
		},
	},
};

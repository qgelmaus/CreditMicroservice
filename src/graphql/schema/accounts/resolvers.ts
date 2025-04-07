import {
	createCreditAccount,
	deleteCreditAccount,
	getCreditAccounts,
} from "../../../services/creditAccount.service";

const resolvers = {
	Query: {
		creditAccounts: async () => {
			const result = await getCreditAccounts();

			return result;
		},
	},
	Mutation: {
		createCreditAccount: async (
			_: any,
			args: {
				email: string;
				type: string;
				originalCredits: number;
				originalMoney: number;
				availableCredits: number;
				availableMoney: number;
			},
		) => {
			return await createCreditAccount({
				...args,
				type: args.type as "GIFT_CARD" | "PREPAID_CARD",
			});
		},
		deleteCreditAccount: async (_: any, args: { id: number }) => {
			return await deleteCreditAccount(args.id);
		},
	},
};

export default resolvers;

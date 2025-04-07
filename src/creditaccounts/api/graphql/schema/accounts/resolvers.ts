import { CreditAccountService } from "../../../../app/services/creditAccount.service";
import { CreditAccountRepository } from "../../../../infrastructure/repository/createCreditaccount.repository";
const repo = new CreditAccountRepository();
const service = new CreditAccountService(repo);

const resolvers = {
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
			return await service.createCreditaccount(
				args.email,
				args.type as "GIFT_CARD" | "PREPAID_CARD",
				args.originalCredits,
				args.originalMoney,
			);
		},
	},
};

export default resolvers;

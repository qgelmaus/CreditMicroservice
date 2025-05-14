//apps/api/src/modules/creditaccount/app/resolvers/index.tx
import { Resolvers } from "apps/api/src/shared/types/codegen.types";
import {
	createGiftAccount,
	createPrepaidAccount,
} from "../commands/CreditAccount/Account/createCreditAccount";
import { nullifyAccount } from "../commands/CreditAccount/Account/nullifyAccount";
import { refundCredits } from "../commands/CreditAccount/Account/refundCredits";
import { refundMoney } from "../commands/CreditAccount/Account/refundMoney";
import { transferCredits } from "../commands/CreditAccount/Account/transferCredits";
import { useCredits } from "../commands/CreditAccount/Account/useCredits";
import { cancelCreditAccountFlow } from "../commands/flowCommands/cancelCreditAccountFlow";
import { finalizeCreditAccount } from "../commands/flowCommands/finalizeCreditAccount";
import { selectCreditAccountTypeResolver } from "../commands/flowCommands/selectCreditAccountType";
import { setCreditAccountEmail } from "../commands/flowCommands/setEmail";
import { submitCreditAccountDetails } from "../commands/flowCommands/submitCreditAccountDetails";
import { validateCreditAccount } from "../commands/flowCommands/validateCreditAccount";
import { allCreditAccounts } from "../queries/CreditAccount/Account/allCreditAccounts";
import { creditAccountByCode } from "../queries/CreditAccount/Account/creditAccountByCode";
import { transactionsForAccountByCode } from "../queries/CreditAccount/Account/creditAccountByCode";
import { creditAccountByEmail } from "../queries/CreditAccount/Account/creditAccountByEmail";
import { allCreditTransactions } from "../queries/CreditAccount/Transaction/transactionsByAccountCode";
import { createCreditAccountWithPayment } from "../commands/CreditAccount/Account/createCreditAccountWithPayment";

export const creditAccountResolver: Resolvers = {
	CreditAccount: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		__resolveType(obj: any) {
			if (obj.type === "GIFT_CARD") return "GiftAccount";
			if (obj.type === "PREPAID_CARD") return "PrepaidAccount";
			return null;
		},
	},
	Mutation: {
		createCreditAccountWithPayment,
		createGiftAccount,
		createPrepaidAccount,
		useCredits,
		refundCredits,
		refundMoney,
		transferCredits,
		nullifyAccount,
	},

	Query: {
		creditAccountByCode,
		creditAccountByEmail,
		transactionsForAccountByCode,
		allCreditAccounts,
		allCreditTransactions,
	},
};

export const flowResolvers = {
	Mutation: {
		selectCreditAccountType: selectCreditAccountTypeResolver,
		setCreditAccountEmail,
		submitCreditAccountDetails,
		validateCreditAccount,
		finalizeCreditAccount,
		cancelCreditAccountFlow,
	},
};

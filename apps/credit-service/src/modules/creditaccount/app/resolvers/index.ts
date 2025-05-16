import {
  createCreditAccount,
  createGiftAccount,
  createPrepaidAccount,
} from "../commands/CreditAccount/Account/createCreditAccount.ts";
import { nullifyAccount } from "../commands/CreditAccount/Account/nullifyAccount.ts";
import { refundCredits } from "../commands/CreditAccount/Account/refundCredits.ts";
import { refundMoney } from "../commands/CreditAccount/Account/refundMoney.ts";
import { transferCredits } from "../commands/CreditAccount/Account/transferCredits.ts";
import { useCredits } from "../commands/CreditAccount/Account/useCredits.ts";
import { cancelCreditAccountFlow } from "../commands/flowCommands/cancelCreditAccountFlow.ts";
import { finalizeCreditAccount } from "../commands/flowCommands/finalizeCreditAccount.ts";
import { selectCreditAccountTypeResolver } from "../commands/flowCommands/selectCreditAccountType.ts";
import { setCreditAccountEmail } from "../commands/flowCommands/setEmail.ts";
import { submitCreditAccountDetails } from "../commands/flowCommands/submitCreditAccountDetails.ts";
import { validateCreditAccount } from "../commands/flowCommands/validateCreditAccount.ts";
import { allCreditAccounts } from "../queries/CreditAccount/Account/allCreditAccounts.ts";
import { creditAccountByCode } from "../queries/CreditAccount/Account/creditAccountByCode.ts";
import { creditAccountByEmail } from "../queries/CreditAccount/Account/creditAccountByEmail.ts";
import type { Resolvers } from "../../../../shared/types/codegen.types.ts";

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
    createCreditAccount,
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

    allCreditAccounts,
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

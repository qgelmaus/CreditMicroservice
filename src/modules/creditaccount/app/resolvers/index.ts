import {
  createGiftAccount,
  createPrepaidAccount,
} from "../commands/CreditAccount/Account/createCreditAccount";
import { refundCredits } from "../commands/CreditAccount/Account/refundCredits";
import { refundMoney } from "../commands/CreditAccount/Account/refundMoney";
import { transferCredits } from "../commands/CreditAccount/Account/transferCredits";
import { useCredits } from "../commands/CreditAccount/Account/useCredits";
import { selectCreditAccountTypeResolver } from "../commands/flowCommands/selectCreditAccountType";
import { allCreditAccounts } from "../queries/CreditAccount/Account/allCreditAccounts";
import { creditAccountByCode } from "../queries/CreditAccount/Account/creditAccountByCode";
import { transactionsForAccountByCode } from "../queries/CreditAccount/Transaction/transactionsByAccountCode";

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
    createGiftAccount,
    createPrepaidAccount,
    useCredits,
    refundCredits,
    refundMoney,
    transferCredits,
  },

  Query: {
    creditAccountByCode,
    transactionsForAccountByCode,
    allCreditAccounts,
  },
};

export const flowResolvers = {
  Mutation: {
    selectCreditAccountType: selectCreditAccountTypeResolver,
  },
};

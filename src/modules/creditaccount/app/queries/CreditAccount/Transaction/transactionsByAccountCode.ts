import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const transactionsForAccountByCode = async (_: any, { code }: any) => {
  return await service.findTransactions(code);
};

import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const nullifyAccount = async (_: any, { input }: any) => {
  const { creditCode, note } = input;
  return await service.nullifyAccount(creditCode, note);
};

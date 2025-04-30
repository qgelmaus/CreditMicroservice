import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const refundMoney = async (_: any, { input }: any) => {
  const { creditCode, money, note } = input;
  return await service.refundMoney(creditCode, money, note);
};

import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const refundCredits = async (_: any, { input }: any) => {
  const { creditCode, cost, note } = input;
  return await service.refundCredits(creditCode, cost, note);
};

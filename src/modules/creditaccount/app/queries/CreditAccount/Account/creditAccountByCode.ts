import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const creditAccountByCode = async (_: any, { code }: any) => {
  return await service.findByCode(code);
};

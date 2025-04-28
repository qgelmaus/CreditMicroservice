import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const creditAccountByCode = async (_: any, { code }: any) => {
  console.log(code);
  const account = await service.findByCode(code);
  console.log("Resolver console.log: ", account);
  return account;
};

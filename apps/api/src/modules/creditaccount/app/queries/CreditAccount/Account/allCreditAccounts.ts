import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

export const allCreditAccounts = async () => {
  return await service.findAll();
};

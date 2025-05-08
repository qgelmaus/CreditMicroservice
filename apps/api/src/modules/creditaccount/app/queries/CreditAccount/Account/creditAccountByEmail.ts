import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const creditAccountByEmail = async (_: any, { email }: any) => {
	return await service.findByEmail(email);
};

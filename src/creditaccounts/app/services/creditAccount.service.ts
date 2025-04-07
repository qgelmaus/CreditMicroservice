import type {
	CreditAccountDTO,
	CreditAccountType,
} from "../../../utils/types/creditaccount.types";
import { CreditAccount } from "../../domain/CreditAccount";
import type { CreditAccountRepository } from "../../infrastructure/repository/createCreditaccount.repository";

export class CreditAccountService {
	constructor(private repo: CreditAccountRepository) {}

	async createCreditaccount(
		email: string,
		type: CreditAccountType,
		credits: number,
		money: number,
	): Promise<CreditAccountDTO> {
		const account = new CreditAccount(type, credits, money, email);
		return await this.repo.save(account);
	}
}

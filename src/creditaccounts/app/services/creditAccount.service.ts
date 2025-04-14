import type { CreditAccount } from "../../domain/CreditAccount";
import { CreditAccountRepository } from "../../infrastructure/repository/createCreditaccount.repository";

export class CreditAccountService {
	private repo = new CreditAccountRepository();

	async create(account: CreditAccount) {
		const dto = account.getDataToPersist();

		const saved = await this.repo.create(dto);

		return saved;
	}

	async findByCode(code: string) {
		return await this.repo.findByCreditCode(code);
	}

	async findAll() {
		return await this.repo.findAll();
	}

	/*async use(creditCode: string, cost: number) {
		const account = this.repo.findByCreditCode(creditCode);
		if (!account) throw new Error("No account with requested code");

		account.useCredits(cost);
	} */
}

import type { CreditAccount } from "../../domain/CreditAccount";
import type {
	CreditAccountDTO,
	CreditAccountType,
} from "../../../utils/types/creditaccount.types";
import { prisma } from "../db/client";

const prismaInstance = prisma;

export class CreditAccountRepository {
	async save(account: CreditAccount): Promise<CreditAccountDTO> {
		const saved = await prismaInstance.creditAccounts.create({
			data: account.getDataToPersist(),
		});

		return saved as CreditAccountDTO;
	}
}

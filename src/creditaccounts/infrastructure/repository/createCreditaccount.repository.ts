import { PrismaClient } from "@prisma/client";
import { CreditAccount } from "../../domain/CreditAccount";
import type { CreditAccountType } from "../../../utils/types/creditaccount.types";

const prisma = new PrismaClient();

export class CreditAccountRepository {
	async save(account: CreditAccount): Promise<CreditAccount> {
		const saved = await prisma.creditAccounts.create({
			data: account.getDataToPersist(),
		});

		return new CreditAccount(
			saved.type as CreditAccountType,
			saved.originalCredits,
			saved.originalMoney,
			saved.email,
		);
	}
}

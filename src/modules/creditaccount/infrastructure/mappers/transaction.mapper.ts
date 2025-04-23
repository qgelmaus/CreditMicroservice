import type { CreditAccount, CreditTransaction } from "@prisma/client";
import type { TransactionDTO } from "../../app/dto/creditaccount.types";

export function toTransactionDTO(
	tx: CreditTransaction & { creditAccount: CreditAccount },
): TransactionDTO {
	return {
		id: tx.id,
		type: tx.type,
		credits: tx.credits,
		money: tx.money,
		note: tx.note ?? undefined,
		createdAt: tx.createdAt,
		creditCode: tx.creditAccount.creditCode,
	};
}

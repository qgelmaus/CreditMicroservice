import type { CreditAccount as PrismaAccount } from "@prisma/client";
import {
	type CreditAccount,
	GiftAccount,
	PrepaidAccount,
} from "../creditaccounts/domain/CreditAccount";
import type { CreditAccountDTO } from "../creditaccounts/domain/shared/types/creditaccount.types";
import { Credits } from "../creditaccounts/domain/valueobjects/Credits";
import { Money } from "../creditaccounts/domain/valueobjects/Money";

export function toDomain(account: PrismaAccount) {
	const originalCredits = new Credits(account.originalCredits);
	const originalMoney = new Money(account.originalMoney);
	const availableCredits = new Credits(account.availableCredits);
	const availableMoney = new Money(account.availableMoney);

	if (account.type === "GIFT_CARD") {
		return new GiftAccount(
			account.id,
			account.creditCode,
			originalCredits,
			originalMoney,
			availableCredits,
			availableMoney,
			account.email,
			account.dateCreated,
			account.dateExpired,
		);
	}

	if (account.type === "PREPAID_CARD") {
		return new PrepaidAccount(
			account.id,
			account.creditCode,
			originalCredits,
			originalMoney,
			availableCredits,
			availableMoney,
			account.email,
			account.dateCreated,
			account.dateExpired,
			account.treatmentCount!,
			account.discountPercentage!,
		);
	}

	throw new Error("Unknown account type");
}

export function toDTO(account: CreditAccount): CreditAccountDTO {
	return {
		creditCode: account.creditCode,
		type: account.type,
		originalCredits: account.originalCredits.value,
		originalMoney: account.originalMoney.amount,
		availableCredits: account.availableCredits,
		availableMoney: account.availableMoney,
		email: account.email,
		dateCreated: account.dateCreated,
		dateExpired: account.dateExpired,
	};
}

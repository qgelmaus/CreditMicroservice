import type { CreditAccount as PrismaAccount } from "@prisma/client";
import { Credits } from "../../domain/valueobjects/Credits";
import { Money } from "../../domain/valueobjects/Money";
import {
	type CreditAccount,
	GiftAccount,
	PrepaidAccount,
} from "../../domain/CreditAccount";
import type { CreditAccountDTO } from "../../app/dto/creditaccount.types";

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
			account.treatmentCount ?? 0,
			account.discountPercentage ?? 0,
		);
	}

	throw new Error("Unknown account type");
}

export function toDTO(account: CreditAccount): CreditAccountDTO {
	const base: CreditAccountDTO = {
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

	if (account instanceof PrepaidAccount) {
		return {
			...base,
			treatmentCount: account.treatmentCount,
			discountPercentage: account.discountPercentage,
		};
	}

	return base;
}

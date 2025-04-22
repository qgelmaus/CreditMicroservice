import type { CreditAccountType } from "@prisma/client";
import type { Credits } from "../../domain/valueobjects/Credits";
import type { Money } from "../../domain/valueobjects/Money";

export interface CreditAccountDTO {
	creditCode: string;
	type: CreditAccountType;
	originalCredits: number;
	originalMoney: number;
	availableCredits: number;
	availableMoney: number;
	email: string;
	dateCreated: Date;
	dateExpired: Date;
	treatmentCount?: number;
	discountPercentage?: number;
}

export interface IUpdateAccount {
	credits: Credits;
	money: Money;
}

export interface CreditTransferDTO {
	fromTransactionId: number;
	toTransactionId: number;
}

import type {
	CreditAccountType,
	CreditTransaction,
	TransactionType,
} from "@prisma/client";
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
	createdAt: Date;
	expiresAt: Date;
	treatmentCount?: number;
	discountPercentage?: number;
	transactions?: TransactionDTO[];
}

export interface IUpdateAccount {
	credits: Credits;
	money: Money;
}

export interface CreditTransferDTO {
	fromTransactionId: number;
	toTransactionId: number;
	amount: number;
	createdAt: Date;
}

export interface TransactionDTO {
	id: number;
	type: TransactionType;
	credits: number;
	money: number;
	note?: string;
	createdAt: Date;
	creditCode: string;
}

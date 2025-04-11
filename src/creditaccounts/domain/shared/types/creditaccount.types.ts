import type { CreditAccountType } from "@prisma/client";

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

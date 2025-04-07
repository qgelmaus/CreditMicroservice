export type CreditAccountType = "GIFT_CARD" | "PREPAID_CARD";
export type PaymentMethod = "MobilePay" | "CreditCard";

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
}

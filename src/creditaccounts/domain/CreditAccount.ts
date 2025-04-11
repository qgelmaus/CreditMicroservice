import type { CreditAccountDTO } from "./shared/types/creditaccount.types";
import type { CreditAccountType } from "@prisma/client";

export abstract class CreditAccount {
	public readonly id: number | null;
	public readonly creditCode: string;
	public readonly type: CreditAccountType;
	public readonly originalCredits: number;
	public readonly originalMoney: number;
	public availableCredits: number;
	public availableMoney: number;
	public readonly email: string;
	public readonly dateCreated: Date;
	public readonly dateExpired: Date;

	constructor(
		type: CreditAccountType,
		originalCredits: number,
		originalMoney: number,
		email: string,
	) {
		this.id = null;
		this.creditCode = this.generateCreditCode();
		this.type = type;
		this.originalCredits = originalCredits;
		this.originalMoney = originalMoney;
		this.availableCredits = originalCredits;
		this.availableMoney = originalMoney;
		this.email = email;
		this.dateCreated = new Date();
		this.dateExpired = this.generateDateExpired(this.dateCreated);
	}

	private generateCreditCode(): string {
		const randomDigits = Math.floor(1000000 + Math.random() * 900000);
		return `RR${randomDigits}`;
	}

	private generateDateExpired(dateCreated: Date): Date {
		const date = new Date(dateCreated);
		date.setFullYear(date.getFullYear() + 3);
		return date;
	}

	public abstract getDataToPersist(): CreditAccountDTO;
	public abstract useCredits(cost: number): void;
}

export class GiftAccount extends CreditAccount {
	constructor(purchaseAmount: number, recipientEmail: string) {
		super("GIFT_CARD", purchaseAmount, purchaseAmount, recipientEmail);
	}

	public useCredits(cost: number): void {
		if (this.availableCredits <= 0 || this.availableCredits - cost < 0)
			throw new Error("Not enough credits available");
		this.availableCredits -= cost;
		this.availableMoney -= cost;
	}

	public override getDataToPersist(): CreditAccountDTO {
		return {
			creditCode: this.creditCode,
			type: this.type,
			originalCredits: this.originalCredits,
			originalMoney: this.originalMoney,
			availableCredits: this.availableCredits,
			availableMoney: this.availableMoney,
			email: this.email,
			dateCreated: this.dateCreated,
			dateExpired: this.dateExpired,
		};
	}
}

export class PrepaidAccount extends CreditAccount {
	public readonly treatmentCount: number;
	public readonly discountPercentage: number;

	constructor(
		treatmentCount: 5 | 10,
		pricePerTreatment: number,
		email: string,
	) {
		const discount = treatmentCount === 5 ? 0.12 : 0.16; // 12% for 5, 16% for 10
		const totalPrice = treatmentCount * pricePerTreatment * (1 - discount);
		const totalCredits = treatmentCount * pricePerTreatment;

		super("PREPAID_CARD", totalCredits, totalPrice, email);
		this.treatmentCount = treatmentCount;
		this.discountPercentage = discount * 100;
	}

	public useCredits(cost: number): void {
		const discountedCost = (cost / 100) * this.discountPercentage;
		if (this.availableCredits <= 0 || this.availableCredits - cost < 0)
			throw new Error("Not enough credits available");
		this.availableCredits -= cost;
		this.availableMoney -= discountedCost;
	}

	public override getDataToPersist(): CreditAccountDTO {
		return {
			creditCode: this.creditCode,
			type: this.type,
			originalCredits: this.originalCredits,
			originalMoney: this.originalMoney,
			availableCredits: this.availableCredits,
			availableMoney: this.availableMoney,
			email: this.email,
			dateCreated: this.dateCreated,
			dateExpired: this.dateExpired,
			treatmentCount: this.treatmentCount,
			discountPercentage: this.discountPercentage,
		};
	}
}

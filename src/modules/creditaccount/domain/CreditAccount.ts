import { CreditAccountType } from "@prisma/client";
import type { Money } from "./valueobjects/Money";
import type { Credits } from "./valueobjects/Credits";

export abstract class CreditAccount {
	constructor(
		public readonly id: number,
		public readonly creditCode: string,
		public readonly type: CreditAccountType,
		public readonly originalCredits: Credits,
		public readonly originalMoney: Money,
		protected _availableCredits: Credits,
		protected _availableMoney: Money,
		public readonly email: string,
		public readonly dateCreated: Date,
		public readonly dateExpired: Date,
	) {}

	useCredits(cost: number) {}
	refundCredits(cost: number) {}
	transferCreditsToAccount(amount: number) {}
	transferCreditsFromAccount(amount: number) {}

	refundMoneyOnly(money: number) {
		this._availableMoney = this._availableMoney.subtract(money);
	}

	get availableCredits(): number {
		return this._availableCredits.value;
	}

	get availableMoney(): number {
		return this._availableMoney.amount;
	}

	getDataToPersist() {
		return {
			creditCode: this.creditCode,
			type: this.type,
			originalCredits: this.originalCredits.value,
			originalMoney: this.originalMoney.amount,
			availableCredits: this._availableCredits.value,
			availableMoney: this._availableMoney.amount,
			email: this.email,
			dateCreated: this.dateCreated,
			dateExpired: this.dateExpired,
		};
	}

	equals(other: CreditAccount): boolean {
		return this.creditCode === other.creditCode;
	}
}

export class GiftAccount extends CreditAccount {
	constructor(
		id: number,
		creditCode: string,
		originalCredits: Credits,
		originalMoney: Money,
		availableCredits: Credits,
		availableMoney: Money,
		email: string,
		dateCreated: Date,
		dateExpired: Date,
	) {
		super(
			id,
			creditCode,
			CreditAccountType.GIFT_CARD,
			originalCredits,
			originalMoney,
			availableCredits,
			availableMoney,
			email,
			dateCreated,
			dateExpired,
		);
	}

	useCredits(cost: number) {
		this._availableCredits = this._availableCredits.subtract(cost);
		this._availableMoney = this._availableMoney.subtract(cost);
	}

	refundCredits(cost: number) {
		this._availableCredits = this._availableCredits.add(cost);
		this._availableMoney = this._availableMoney.add(cost);
	}

	transferCreditsFromAccount(amount: number) {
		this._availableCredits = this._availableCredits.subtract(amount);
		this._availableMoney = this._availableMoney.subtract(amount);
	}

	transferCreditsToAccount(amount: number) {
		this._availableCredits = this._availableCredits.add(amount);
		this._availableMoney = this._availableMoney.add(amount);
	}
}

export class PrepaidAccount extends CreditAccount {
	constructor(
		id: number,
		creditCode: string,
		originalCredits: Credits,
		originalMoney: Money,
		availableCredits: Credits,
		availableMoney: Money,
		email: string,
		dateCreated: Date,
		dateExpired: Date,
		public treatmentCount: number,
		public readonly discountPercentage: number,
	) {
		super(
			id,
			creditCode,
			CreditAccountType.PREPAID_CARD,
			originalCredits,
			originalMoney,
			availableCredits,
			availableMoney,
			email,
			dateCreated,
			dateExpired,
		);
	}

	useCredits(cost: number) {
		this._availableCredits = this._availableCredits.subtract(cost);
		const discountedAmount = cost * (1 - this.discountPercentage / 100);
		this._availableMoney = this._availableMoney.subtract(discountedAmount);
		this.treatmentCount -= 1;
	}

	refundCredits(cost: number) {
		this._availableCredits = this._availableCredits.add(cost);
		const discountedAmount = cost * (1 - this.discountPercentage / 100);
		this._availableMoney = this._availableMoney.add(discountedAmount);
		this.treatmentCount += 1;
	}

	transferCreditsFromAccount(amount: number) {
		this._availableCredits = this._availableCredits.subtract(amount);
		const discountedAmount = amount * (1 - this.discountPercentage / 100);
		this._availableMoney = this._availableMoney.subtract(discountedAmount);
	}

	transferCreditsToAccount(amount: number) {
		this._availableCredits = this._availableCredits.add(amount);
		const discountedAmount = amount * (1 - this.discountPercentage / 100);
		this._availableMoney = this._availableMoney.add(discountedAmount);
	}

	getDataToPersist() {
		return {
			...super.getDataToPersist(),
			treatmentCount: this.treatmentCount,
			discountPercentage: this.discountPercentage,
		};
	}
}

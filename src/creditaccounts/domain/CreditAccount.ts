import type {
	CreditAccountDTO,
	CreditAccountType,
} from "../../utils/types/creditaccount.types";

export class CreditAccount {
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
		this.availableCredits = originalCredits;
		this.originalMoney = originalMoney;
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
		const dateCreatedHolder = new Date(dateCreated);
		return new Date(
			dateCreatedHolder.setFullYear(dateCreated.getFullYear() + 3),
		);
	}

	public getDataToPersist(): CreditAccountDTO {
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

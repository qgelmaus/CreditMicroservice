import { GiftAccount, PrepaidAccount } from "../../domain/CreditAccount";
import type { CreditAccountDTO } from "../dto/creditaccount.types";
import { Credits } from "../../domain/valueobjects/Credits";
import { Money } from "../../domain/valueobjects/Money";

import { CreditTransactionRepository } from "../../domain/creditTransaction.repository";
import { CreditAccountRepository } from "../../domain/creditaccount.repository";
import {
	toDomain,
	toDTO,
} from "../../infrastructure/mappers/creditaccount.mapper";

export class CreditAccountService {
	private accountRepo = new CreditAccountRepository();
	private transactionRepo = new CreditTransactionRepository();

	async createGiftAccount(purchaseAmount: number, email: string) {
		const credits = new Credits(purchaseAmount);
		const money = new Money(purchaseAmount);

		const account = new GiftAccount(
			0,
			this.generateCreditCode(),
			credits,
			money,
			credits,
			money,
			email,
			new Date(),
			this.generateDateExpired(),
		);

		const saved = await this.accountRepo.create(account.getDataToPersist());

		await this.transactionRepo.logPurchase(
			saved.id,
			saved.originalCredits,
			saved.originalMoney,
		);

		return toDTO(toDomain(saved));
	}

	async createPrepaidAccount(
		treatmentCount: number,
		pricePerTreatment: number,
		email: string,
	): Promise<CreditAccountDTO> {
		const discount = treatmentCount === 5 ? 0.12 : 0.16;
		const fullPrice = treatmentCount * pricePerTreatment;
		const discountedPrice = fullPrice * (1 - discount);

		const credits = new Credits(fullPrice);
		const money = new Money(discountedPrice);

		const account = new PrepaidAccount(
			0,
			this.generateCreditCode(),
			credits,
			money,
			credits,
			money,
			email,
			new Date(),
			this.generateDateExpired(),
			treatmentCount,
			discount * 100,
		);

		const saved = await this.accountRepo.create(account.getDataToPersist());

		await this.transactionRepo.logPurchase(
			saved.id,
			saved.originalCredits,
			saved.originalMoney,
		);

		return toDTO(toDomain(saved));
	}

	async useCredits(
		creditCode: string,
		cost: number,
		note?: string,
	): Promise<CreditAccountDTO> {
		const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
		if (!dbAccount) throw new Error("Account not found");

		const account = toDomain(dbAccount);
		account.useCredits(cost);
		const updated = await this.accountRepo.updateState(account);

		await this.transactionRepo.logCreditUsed(
			updated.id,
			cost,
			cost,
			note ?? "",
		);

		return toDTO(toDomain(updated));
	}

	async refundCredits(
		creditCode: string,
		cost: number,
		note?: string,
	): Promise<CreditAccountDTO> {
		const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
		if (!dbAccount) throw new Error("Account not found");

		const account = toDomain(dbAccount);
		account.refundCredits(cost);

		const updated = await this.accountRepo.updateState(account);

		await this.transactionRepo.logCreditRefund(
			updated.id,
			cost,
			cost,
			note ?? "",
		);

		return toDTO(toDomain(updated));
	}

	async refundMoney(
		creditCode: string,
		credits: number,
		money: number,
		note?: string,
	): Promise<CreditAccountDTO> {
		const dbAccount = await this.accountRepo.findByCreditCode(creditCode);
		if (!dbAccount) throw new Error("Account not found");

		const account = toDomain(dbAccount);
		account.refundMoneyOnly(money);

		const updated = await this.accountRepo.updateState(account);

		await this.transactionRepo.logMoneyRefund(
			updated.id,
			credits,
			money,
			note ?? "",
		);

		return toDTO(toDomain(updated));
	}

	async findByCode(creditCode: string): Promise<CreditAccountDTO> {
		const account = await this.accountRepo.findByCreditCode(creditCode);
		if (!account) throw new Error("Account not found");
		return toDTO(toDomain(account));
	}

	async findAll(): Promise<CreditAccountDTO[]> {
		const accounts = await this.accountRepo.findAll();
		return accounts.map((a) => toDTO(toDomain(a)));
	}

	private generateCreditCode(): string {
		const randomDigits = Math.floor(1000000 + Math.random() * 900000);
		return `RR${randomDigits}`;
	}

	private generateDateExpired(): Date {
		const now = new Date();
		now.setFullYear(now.getFullYear() + 3);
		return now;
	}
}

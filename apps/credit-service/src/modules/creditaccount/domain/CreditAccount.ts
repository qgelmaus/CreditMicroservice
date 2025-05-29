import type { Money } from "./valueobjects/Money.ts";
import type { Credits } from "./valueobjects/Credits.ts";
import type { CreditAccountDTO } from "../app/dto/creditaccount.types.ts";
import {
  CreditAccountType,
  type CreditTransaction,
} from "apps/credit-service/src/prisma/generated/client/index.js";

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
    public isActive: boolean,
    public readonly createdAt: Date,
    public readonly expiresAt: Date,
    public readonly transactions: CreditTransaction[] = []
  ) {}

  getId(): number {
    return this.id;
  }

  getCreditCode(): string {
    return this.creditCode;
  }

  getExpirationDate(): Date {
    return this.expiresAt;
  }

  getEmail(): string {
    return this.email;
  }

  activate() {
    this.isActive = true;
  }

  getAvailableCredits(): Credits {
    return this._availableCredits;
  }

  getAvailableMoney(): Money {
    return this._availableMoney;
  }

  useCredits(cost: number) {}
  refundCredits(cost: number) {}
  transferCreditsToAccount(amount: number) {}
  transferCreditsFromAccount(amount: number) {}

  nullifyAccount() {
    this.isActive = false;
    this._availableCredits = this._availableCredits.nullify();
    this._availableMoney = this._availableMoney.nullify();
  }

  refundMoneyOnly(money: number) {
    this._availableMoney = this._availableMoney.subtract(money);
  }

  get availableCredits(): number {
    return this._availableCredits.value;
  }

  get availableMoney(): number {
    return this._availableMoney.amount;
  }

  getOriginalCredits(): number {
    return this.originalCredits.getValue();
  }

  getOriginalMoney(): number {
    return this.originalMoney.getAmount();
  }

  getTypeAsString(): string {
    if (this.type === CreditAccountType.GIFT_CARD) return "GIFT_CARD";
    return "PREPAID_CARD";
  }

  getDataToPersist() {
    return {
      creditCode: this.creditCode,
      type: this.type,
      originalCredits: this.originalCredits.value,
      originalMoney: this.originalMoney.amount,
      availableCredits: this.availableCredits,
      availableMoney: this.availableMoney,
      email: this.email,
      isActive: this.isActive,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
    };
  }

  equals(other: CreditAccount): boolean {
    return this.creditCode === other.creditCode;
  }

  toDTO(): CreditAccountDTO {
    const dto = {
      id: this.id,
      creditCode: this.creditCode,
      type: this.type,
      originalCredits: this.originalCredits.getValue(),
      originalMoney: this.originalMoney.getAmount(),
      availableCredits: this._availableCredits.getValue(),
      availableMoney: this._availableMoney.getAmount(),
      email: this.email,
      isActive: this.isActive,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
      ...(this instanceof PrepaidAccount && {
        treatmentCount: this.treatmentCount,
        discountPercentage: this.discountPercentage,
      }),
    };

    console.log("Returning dto: ", dto);
    return dto;
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
    isActive: boolean,
    createdAt: Date,
    expiresAt: Date,
    transactions: CreditTransaction[] = []
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
      isActive,
      createdAt,
      expiresAt,
      transactions
    );
  }

  useCredits(cost: number) {
    if (!this.isActive) throw new Error("Account is not active");
    this._availableCredits = this._availableCredits.subtract(cost);
    this._availableMoney = this._availableMoney.subtract(cost);
  }

  refundCredits(cost: number) {
    if (!this.isActive) throw new Error("Account is not active");
    this._availableCredits = this._availableCredits.add(cost);
    this._availableMoney = this._availableMoney.add(cost);
  }

  transferCreditsFromAccount(amount: number) {
    if (!this.isActive) throw new Error("Account is not active");
    this._availableCredits = this._availableCredits.subtract(amount);
    this._availableMoney = this._availableMoney.subtract(amount);
  }

  transferCreditsToAccount(amount: number) {
    if (!this.isActive) throw new Error("Account is not active");
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
    isActive: boolean,
    createdAt: Date,
    expiresAt: Date,
    public treatmentCount: number,
    public readonly discountPercentage: number,
    transactions: CreditTransaction[] = []
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
      isActive,
      createdAt,
      expiresAt,
      transactions
    );
  }

  getTreatmentCount(): number {
    return this.treatmentCount;
  }

  useCredits(cost: number) {
    if (!this.isActive) throw new Error("Account is not active");
    this._availableCredits = this._availableCredits.subtract(cost);
    const discountedAmount = cost * (1 - this.discountPercentage / 100);
    this._availableMoney = this._availableMoney.subtract(discountedAmount);
    this.treatmentCount -= 1;
  }

  refundCredits(cost: number) {
    if (!this.isActive) throw new Error("Account is not active");
    this._availableCredits = this._availableCredits.add(cost);
    const discountedAmount = cost * (1 - this.discountPercentage / 100);
    this._availableMoney = this._availableMoney.add(discountedAmount);
    this.treatmentCount += 1;
  }

  transferCreditsFromAccount(amount: number) {
    if (!this.isActive) throw new Error("Account is not active");
    this._availableCredits = this._availableCredits.subtract(amount);
    const discountedAmount = amount * (1 - this.discountPercentage / 100);
    this._availableMoney = this._availableMoney.subtract(discountedAmount);
  }

  transferCreditsToAccount(amount: number) {
    if (!this.isActive) throw new Error("Account is not active");
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

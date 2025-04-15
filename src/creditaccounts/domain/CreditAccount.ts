import { CreditAccountType } from "@prisma/client";
import { Money } from "./valueobjects/Money";
import { Credits } from "./valueobjects/Credits";

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
    public readonly dateExpired: Date
  ) {}

  useCredits(credits: number, money: number) {
    this._availableCredits = this._availableCredits.subtract(credits);
    this._availableMoney = this._availableMoney.subtract(money);
  }

  refundCredits(credits: number, money: number) {
    this._availableCredits = this._availableCredits.add(credits);
    this._availableMoney = this._availableMoney.add(money);
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
    dateExpired: Date
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
      dateExpired
    );
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
    public readonly treatmentCount: number,
    public readonly discountPercentage: number
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
      dateExpired
    );
  }
}

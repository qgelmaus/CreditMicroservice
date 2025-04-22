export class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string = "DKK"
  ) {
    if (amount < 0) {
      throw new Error("Money amount cannot be negative");
    }
  }

  add(value: number): Money {
    return new Money(this.amount + value, this.currency);
  }

  subtract(value: number): Money {
    if (value > this.amount) {
      throw new Error("Cannot subtract more money than available");
    }
    return new Money(this.amount - value, this.currency);
  }

  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
}

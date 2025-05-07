export class Credits {
  constructor(public readonly value: number) {
    if (value < 0) {
      throw new Error("Credits cannot be negative");
    }
  }

  getValue(): number {
    return this.value;
  }

  add(amount: number): Credits {
    return new Credits(this.value + amount);
  }

  subtract(amount: number): Credits {
    if (amount > this.value) {
      throw new Error("Cannot subtract more credits than available");
    }
    return new Credits(this.value - amount);
  }

  equals(other: Credits): boolean {
    return this.value === other.value;
  }

  nullify(): Credits {
    return new Credits(0);
  }
}

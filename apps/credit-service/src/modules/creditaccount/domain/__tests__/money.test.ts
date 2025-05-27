import { Money } from "../valueobjects/Money.ts";

describe("Credits", () => {
  it("should throw if value is negative", () => {
    expect(() => new Money(-5)).toThrow();
  });

  it("should add correctly", () => {
    const a = new Money(10);
    const result = a.add(5);
    expect(result.getAmount()).toBe(15);
  });

  it("should subtract correctly", () => {
    const a = new Money(10);
    const result = a.subtract(3);
    expect(result.getAmount()).toBe(7);
  });
});

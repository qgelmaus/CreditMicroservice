import { Credits } from "../valueobjects/Credits.ts";

describe("Credits", () => {
  it("should throw if value is negative", () => {
    expect(() => new Credits(-5)).toThrow();
  });

  it("should add correctly", () => {
    const a = new Credits(10);
    const result = a.add(5);
    expect(result.getValue()).toBe(15);
  });

  it("should subtract correctly", () => {
    const a = new Credits(10);
    const result = a.subtract(3);
    expect(result.getValue()).toBe(7);
  });
});

import { createNewCreditAccount } from "../CreditAccountFactory.ts";
import { CreditAccountTypeEnum } from "apps/credit-service/src/shared/types/input.types.ts";

describe("createNewCreditAccount (factory)", () => {
  it("should create a valid GiftAccount", () => {
    const account = createNewCreditAccount({
      type: CreditAccountTypeEnum.GIFT_CARD,
      email: "test@kunde.dk",
      purchaseAmount: 300,
    });

    expect(account).toBeDefined();
    expect(account.getEmail()).toBe("test@kunde.dk");
    expect(account.getAvailableCredits().getValue()).toBe(300);
    expect(account.getAvailableMoney().getAmount()).toBe(300);
    expect(account.getCreditCode()).toMatch(/^RR\d{7}$/);
  });

  it("should create a valid PrepaidAccount with correct discount", () => {
    const account = createNewCreditAccount({
      type: CreditAccountTypeEnum.PREPAID_CARD,
      email: "klippekort@kunde.dk",
      pricePerTreatment: 100,
      treatmentCount: 5,
    });

    expect(account).toBeDefined();
    expect(account.getEmail()).toBe("klippekort@kunde.dk");
    expect(account.getAvailableCredits().getValue()).toBe(500); // 5 * 100
    expect(account.getAvailableMoney().getAmount()).toBeCloseTo(440); // 500 * 0.88
    expect(account.getCreditCode()).toMatch(/^RR\d{7}$/);
  });

  it("should throw if an unknown type is passed", () => {
    expect(() =>
      createNewCreditAccount({
        type: "UNKNOWN_TYPE",
        email: "ugyldig@kunde.dk",
        originalAmount: 100,
      } as any),
    ).toThrow("Unknown CreditAccountType");
  });
});

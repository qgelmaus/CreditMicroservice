import { PaymentMethod, PaymentStatus } from "@prisma/client";
import type { CreditAccount } from "../../modules/creditaccount/domain/CreditAccount";
import { Money } from "../../modules/creditaccount/domain/valueobjects/Money";
import { PaymentDetails } from "../../modules/paymentDetails/domain/PaymentDetails";

test("PaymentDetails can be created and marked as completed", () => {
  const mockAccount = {
    getId: () => 1,
  } as unknown as CreditAccount;

  const payment = PaymentDetails.create({
    creditAccount: mockAccount,
    amountMoney: new Money(500),
    paymentMethod: PaymentMethod.STRIPE,
    reference: "test-ref",
    paymentStatus: "PENDING",
  });

  expect(payment.getAmount()).toBe(500);
  expect(payment.getStatusRaw()).toBe(PaymentStatus.PENDING);

  payment.markAsCompleted();

  expect(payment.getStatusRaw()).toBe(PaymentStatus.COMPLETED);
});

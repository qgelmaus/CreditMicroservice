import { PaymentMethod, PaymentStatus } from "@prisma/client";
import {
	CreditAccount,
	GiftAccount,
} from "../../modules/creditaccount/domain/CreditAccount";
import { Money } from "../../modules/creditaccount/domain/valueobjects/Money";
import { PaymentDetails } from "../../modules/paymentDetails/domain/PaymentDetails";
import { createNewCreditAccount } from "../../modules/creditaccount/domain/CreditAccountFactory";

test("PaymentDetails can be created and marked as completed", () => {
	const mockAccount = {
		getId: () => 1,
	} as unknown as CreditAccount;

  const payment = PaymentDetails.create({
    creditAccountId: mockAccount.id,
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

test("PaymentDetails can be created and marked as completed", () => {
	const mockAccount = createNewCreditAccount({
		type: "GIFT_CARD",
		email: "test@test.dk",
		originalAmount: 500,
	});

	const accountId = mockAccount.getId();

	const payment = PaymentDetails.create({
		creditAccountId: mockAccount.getId(),
		amountMoney: new Money(500),
		paymentMethod: PaymentMethod.STRIPE,
		reference: "test-ref",
		paymentStatus: "PENDING",
	});

	const paymentId = payment.getId;

	expect(payment.getCreditAccountId()).toBe(accountId);
});

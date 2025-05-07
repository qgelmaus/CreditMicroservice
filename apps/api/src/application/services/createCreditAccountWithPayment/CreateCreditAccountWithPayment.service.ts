import { CreditAccountType } from "@prisma/client";
import type { CreditAccountService } from "../../../modules/creditaccount/app/services/creditAccount.service";
import type { PaymentDetailsService } from "../../../modules/paymentDetails/app/services/paymentDetails.service";
import type { CreateCreditAccountWithPaymentInput } from "./createCreditAccountWithPayment.input";
import type { CreateCreditAccountWithPaymentOutput } from "./createCreditAccountWithPayment.output";

export class CreateCreditAccountWithPaymentService {
  constructor(
    private readonly creditAccountService: CreditAccountService,
    private readonly paymentDetailsService: PaymentDetailsService
  ) {}
  async execute(
    input: CreateCreditAccountWithPaymentInput
  ): Promise<CreateCreditAccountWithPaymentOutput> {
    const { type, purchaseAmount, treatmentCount, pricePerTreatment, email } =
      input.accountData;

    const { amountMoney, paymentMethod, reference } = input.paymentData;

    if (type === CreditAccountType.GIFT_CARD && purchaseAmount) {
      const giftAccount = await this.creditAccountService.createGiftAccount(
        purchaseAmount,
        email
      );

      const payment = await this.paymentDetailsService.create({
        amountMoney,
        paymentMethod,
        reference,
        creditAccount: giftAccount,
      });

      return {
        creditAccount: giftAccount.toDTO(),
        paymentDetails: payment.toDTO(),
      };
    }

    if (
      type === CreditAccountType.PREPAID_CARD &&
      treatmentCount &&
      pricePerTreatment
    ) {
      const prepaidAccount =
        await this.creditAccountService.createPrepaidAccount(
          treatmentCount,
          pricePerTreatment,
          email
        );

      const payment = await this.paymentDetailsService.create({
        amountMoney,
        paymentMethod,
        reference,
        creditAccount: prepaidAccount,
      });

      return {
        creditAccount: prepaidAccount.toDTO(),
        paymentDetails: payment.toDTO(),
      };
    }

    throw new Error("Ugyldige input til kreditkonto-oprettelse");
  }
}

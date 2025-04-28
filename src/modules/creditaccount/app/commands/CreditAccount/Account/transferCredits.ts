import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const transferCredits = async (_: any, { input }: any) => {
  try {
    const { fromCreditCode, toCreditCode, amount, note } = input;

    return await service.transferCredits(
      fromCreditCode,
      toCreditCode,
      amount,
      note
    );
  } catch (err) {
    console.error("Transfer credit failed", err);
    throw err;
  }
};

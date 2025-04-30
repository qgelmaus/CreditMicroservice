import { CreditAccountService } from "../../../services/creditAccount.service";

const service = new CreditAccountService();

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createGiftAccount = async (_: any, { input }: any) => {
  const { purchaseAmount, email } = input;
  return await service.createGiftAccount(purchaseAmount, email);
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createPrepaidAccount = async (_: any, { input }: any) => {
  const { treatmentCount, pricePerTreatment, email } = input;
  return await service.createPrepaidAccount(
    treatmentCount,
    pricePerTreatment,
    email
  );
};

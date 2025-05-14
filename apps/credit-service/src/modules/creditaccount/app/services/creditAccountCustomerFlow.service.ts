import { CustomerCreditAccountFlow } from "../../domain/flows/creditaccount/customerFlow";
import type { CreditAccountService } from "./creditAccount.service";

const flowStorage = new Map<string, CustomerCreditAccountFlow>();

export function getOrCreateFlow(userId: string): CustomerCreditAccountFlow {
  if (!flowStorage.has(userId)) {
    flowStorage.set(userId, new CustomerCreditAccountFlow());
  }
  const getUser = flowStorage.get(userId);
  if (!getUser) throw new Error("get user failed");
  return getUser;
}

export function saveFlow(userId: string, flow: CustomerCreditAccountFlow) {
  flowStorage.set(userId, flow);
}

export async function selectCreditAccountType(
  userId: string,
  type: "GIFT_CARD" | "PREPAID_CARD",
) {
  const flow = getOrCreateFlow(userId);
  flow.selectType(type);
  saveFlow(userId, flow);
}

export async function setCreditAccountEmail(userId: string, email: string) {
  const flow = getOrCreateFlow(userId);
  flow.setEmail(email);
  saveFlow(userId, flow);
}

export async function submitCreditAccountDetails(
  userId: string,
  details: Record<string, any>,
) {
  const flow = getOrCreateFlow(userId);
  flow.setDetails(details);
  saveFlow(userId, flow);
}

export async function validateCreditAccount(
  userId: string,
  accountService: CreditAccountService,
) {
  const flow = getOrCreateFlow(userId);
  flow.validate();
  saveFlow(userId, flow);
}

export function deleteFlow(userId: string) {
  flowStorage.delete(userId);
}

export async function finalizeCreditAccount(
  userId: string,
  accountService: CreditAccountService,
) {
  const flow = getOrCreateFlow(userId);
  const { type, email, details } = flow.finalize();

  if (!details || !email) throw new Error("Details or email is undefined");

  if (type === "GIFT_CARD") {
    const finishedAccount = await accountService.createGiftAccount(
      details.credits,
      email,
    );
    deleteFlow(userId);
    return finishedAccount;
  }

  if (type === "PREPAID_CARD") {
    const finishedAccount = await accountService.createPrepaidAccount(
      details.treatmentCount,
      details.pricePerTreatment,
      email,
    );
    deleteFlow(userId);
    return finishedAccount;
  }

  throw new Error("Invalid account type");
}

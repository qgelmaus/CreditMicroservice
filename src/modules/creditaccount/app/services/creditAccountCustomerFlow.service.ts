import { CustomerCreditAccountFlow } from "../../domain/flows/creditaccount/customerFlow";

import { CreditAccountService } from "./creditAccount.service";

const accountService = new CreditAccountService();
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
  type: "GIFT_CARD" | "PREPAID_CARD"
) {
  const flow = getOrCreateFlow(userId);
  console.log("FLOWSERVICE: TYPE HIT", type);

  flow.selectType(type);
  saveFlow(userId, flow);
}

export async function setCreditAccountEmail(userId: string, email: string) {
  const flow = getOrCreateFlow(userId);

  flow.setEmail(email);
  console.log("FLOWSERVICE: SET EMAIL HIT", email);
  saveFlow(userId, flow);
}

export async function submitCreditAccountDetails(
  userId: string,
  details: Record<string, any>
) {
  const flow = getOrCreateFlow(userId);
  flow.setDetails(details);
  console.log("FLOWSERVICE: SET DETAILS HIT", details);
  saveFlow(userId, flow);
}

export async function validateCreditAccount(userId: string) {
  const flow = getOrCreateFlow(userId);
  flow.validate();
  saveFlow(userId, flow);
}

export async function finalizeCreditAccount(userId: string) {
  const flow = getOrCreateFlow(userId);
  const { type, email, details } = flow.finalize();
  if (!details || !email) throw new Error("Details or email is undefined");

  if (type === "GIFT_CARD") {
    return await accountService.createGiftAccount(details.amount, email);
  }

  if (type === "PREPAID_CARD") {
    return await accountService.createPrepaidAccount(
      details.treatmentCount,
      details.pricePerTreatment,
      email
    );
  }

  throw new Error("Invalid account type");
}

import { CustomerCreditAccountFlow } from "../../domain/flows/creditaccount/customerFlow";

const flowStorage = new Map<string, CustomerCreditAccountFlow>();

export function getOrCreateFlow(userId: string): CustomerCreditAccountFlow {
  if (!flowStorage.has(userId)) {
    flowStorage.set(userId, new CustomerCreditAccountFlow());
  }
  return flowStorage.get(userId)!;
}

export function saveFlow(userId: string, flow: CustomerCreditAccountFlow) {
  flowStorage.set(userId, flow);
}

export async function selectCreditAccountType(
  userId: string,
  type: "GIFT_CARD" | "PREPAID_CARD"
) {
  const flow = getOrCreateFlow(userId);
  flow.selectType(type);
  saveFlow(userId, flow);
}

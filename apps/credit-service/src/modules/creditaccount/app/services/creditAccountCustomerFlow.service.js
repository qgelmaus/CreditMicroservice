import { CustomerCreditAccountFlow } from "../../domain/flows/creditaccount/customerFlow";
const flowStorage = new Map();
export function getOrCreateFlow(userId) {
    if (!flowStorage.has(userId)) {
        flowStorage.set(userId, new CustomerCreditAccountFlow());
    }
    const getUser = flowStorage.get(userId);
    if (!getUser)
        throw new Error("get user failed");
    return getUser;
}
export function saveFlow(userId, flow) {
    flowStorage.set(userId, flow);
}
export async function selectCreditAccountType(userId, type) {
    const flow = getOrCreateFlow(userId);
    flow.selectType(type);
    saveFlow(userId, flow);
}
export async function setCreditAccountEmail(userId, email) {
    const flow = getOrCreateFlow(userId);
    flow.setEmail(email);
    saveFlow(userId, flow);
}
export async function submitCreditAccountDetails(userId, details) {
    const flow = getOrCreateFlow(userId);
    flow.setDetails(details);
    saveFlow(userId, flow);
}
export async function validateCreditAccount(userId, accountService) {
    const flow = getOrCreateFlow(userId);
    flow.validate();
    saveFlow(userId, flow);
}
export function deleteFlow(userId) {
    flowStorage.delete(userId);
}
export async function finalizeCreditAccount(userId, accountService) {
    const flow = getOrCreateFlow(userId);
    const { type, email, details } = flow.finalize();
    if (!details || !email)
        throw new Error("Details or email is undefined");
    if (type === "GIFT_CARD") {
        const finishedAccount = await accountService.createGiftAccount(details.credits, email);
        deleteFlow(userId);
        return finishedAccount;
    }
    if (type === "PREPAID_CARD") {
        const finishedAccount = await accountService.createPrepaidAccount(details.treatmentCount, details.pricePerTreatment, email);
        deleteFlow(userId);
        return finishedAccount;
    }
    throw new Error("Invalid account type");
}

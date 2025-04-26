import { submitCreditAccountDetails as service } from "../../../app/services/creditAccountCustomerFlow.service";
import type { ICreditAccountFlowDetails } from "../../dto/creditaccount.types";

export const submitCreditAccountDetails = async (
  _: any,
  args: { details: Record<string, ICreditAccountFlowDetails> },
  context: { user: { id: string } }
) => {
  await service(context.user.id, args.details);
  return true;
};

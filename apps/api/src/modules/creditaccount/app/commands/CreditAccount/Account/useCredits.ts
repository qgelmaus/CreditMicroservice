import { CreditAccountService } from "../../../services/creditAccount.service";
import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";



export const useCredits: MutationResolvers["useCredits"] = async (
  _parent,
  { input },
  context
) => {
  try {
    const result = await context.services.creditAccount.useCredits(
      input.creditCode,
      input.cost,
      input.note
    );

    return result;
  } catch (err) {
    console.error("useCredits error:", err);
    throw err;
  }
};



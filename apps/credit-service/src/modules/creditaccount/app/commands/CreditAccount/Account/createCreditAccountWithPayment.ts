import { MutationResolvers } from "apps/api/src/shared/types/codegen.types";
import { CreateCreditAccountWithPaymentService } from "../../../../../../application/services/createCreditAccountWithPayment/CreateCreditAccountWithPayment.service"
import { mapToGraphQL } from "../../../../graphql/mapper/toGraphQL";

export const createCreditAccountWithPayment: MutationResolvers["createCreditAccountWithPayment"] = async (
  _,
  { input },
  context
) => {
  try {
    const service = new CreateCreditAccountWithPaymentService(
    context.services.creditAccount,
    context.services.paymentDetails
  );
  

 
  const serviceInput = {
    accountData: {
      ...input.account,
      treatmentCount: input.account.treatmentCount ?? undefined,
      pricePerTreatment: input.account.pricePerTreatment ?? undefined,
      purchaseAmount: input.account.credits ?? undefined,
    },
    paymentData: input.payment,
  };
  
  
  

  const result = await service.execute(serviceInput);
  
  return mapToGraphQL(result.creditAccount) ;} catch (err) {
    
    throw err; 
  }
};

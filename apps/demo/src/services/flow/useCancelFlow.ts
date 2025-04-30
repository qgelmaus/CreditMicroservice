import { gql, useMutation } from "@apollo/client";

const CANCEL_CREDIT_ACCOUNT_FLOW = gql`
  mutation CancelCreditAccountFlow {
    cancelCreditAccountFlow
  }
`;

export const useCancelFlow = () => {
  const [cancelFlowMutation] = useMutation(CANCEL_CREDIT_ACCOUNT_FLOW);

  const cancelFlow = async () => {
    try {
      await cancelFlowMutation();
    } catch (error) {
      console.error("Failed to cancel flow", error);
    }
  };

  return { cancelFlow };
};

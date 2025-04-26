import { gql, useMutation } from "@apollo/client";

const SUBMIT_CREDIT_ACCOUNT_DETAILS = gql`
  mutation SubmitCreditAccountDetails($details: CreditAccountDetailsInput!) {
    submitCreditAccountDetails(details: $details)
  }
`;

export const useSubmitCreditAccountDetails = () => {
  const [submitDetailsMutation] = useMutation(SUBMIT_CREDIT_ACCOUNT_DETAILS);

  const submitDetails = async (details: Record<string, any>) => {
    const { data } = await submitDetailsMutation({ variables: { details } });
    return data.submitCreditAccountDetails;
  };

  return { submitDetails };
};

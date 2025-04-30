import { gql, useMutation } from "@apollo/client";

const VALIDATE_CREDIT_ACCOUNT = gql`
  mutation ValidateCreditAccount {
    validateCreditAccount
  }
`;

export const useValidateCreditAccount = () => {
  const [validateMutation] = useMutation(VALIDATE_CREDIT_ACCOUNT);

  const validate = async () => {
    const { data } = await validateMutation();
    return data.validateCreditAccount;
  };

  return { validate };
};

import { gql, useMutation } from "@apollo/client";

const SET_CREDIT_ACCOUNT_EMAIL = gql`
  mutation SetCreditAccountEmail($email: String!) {
    setCreditAccountEmail(email: $email)
  }
`;

export const useSetCreditAccountEmail = () => {
  const [setEmailMutation] = useMutation(SET_CREDIT_ACCOUNT_EMAIL);

  const setEmail = async (email: string) => {
    const { data } = await setEmailMutation({ variables: { email } });
    return data.setCreditAccountEmail;
  };

  return { setEmail };
};

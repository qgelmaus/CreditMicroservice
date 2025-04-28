import { gql, useMutation } from "@apollo/client";

const SET_CREDIT_ACCOUNT_EMAIL = gql`
  mutation setCreditAccountEmail($email: String!) {
    setCreditAccountEmail(email: $email)
  }
`;

export const useSubmitEmail = () => {
  const [setCreditAccountEmailMutation] = useMutation(SET_CREDIT_ACCOUNT_EMAIL);

  const submitEmail = async (email: string) => {
    const { data } = await setCreditAccountEmailMutation({
      variables: { email },
    });
    return data.setCreditAccountEmail;
  };

  return { submitEmail };
};

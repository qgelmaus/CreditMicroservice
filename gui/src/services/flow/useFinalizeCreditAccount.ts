import { gql, useMutation } from "@apollo/client";

const FINALIZE_CREDIT_ACCOUNT = gql`
  mutation FinalizeCreditAccount {
    finalizeCreditAccount {
      id
      creditCode
      email
      originalCredits
      originalMoney
    }
  }
`;

export const useFinalizeCreditAccount = () => {
  const [finalizeMutation] = useMutation(FINALIZE_CREDIT_ACCOUNT);

  const finalize = async () => {
    const { data } = await finalizeMutation();
    return data.finalizeCreditAccount;
  };

  return { finalize };
};

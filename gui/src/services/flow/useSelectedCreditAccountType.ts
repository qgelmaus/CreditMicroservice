import { gql, useMutation } from "@apollo/client";

const SELECT_CREDIT_ACCOUNT_TYPE = gql`
  mutation SelectCreditAccountType($type: CreditAccountType!) {
    selectCreditAccountType(type: $type)
  }
`;

export const useSelectCreditAccountType = () => {
  const [selectTypeMutation] = useMutation(SELECT_CREDIT_ACCOUNT_TYPE);

  const selectType = async (type: string) => {
    const { data } = await selectTypeMutation({ variables: { type } });
    return data.selectCreditAccountType;
  };

  return { selectType };
};

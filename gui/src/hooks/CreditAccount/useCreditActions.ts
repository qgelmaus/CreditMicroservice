import { useMutation } from "@apollo/client";
import {
  USE_CREDITS,
  REFUND_CREDITS,
  REFUND_MONEY,
  NULLIFY_ACCOUNT,
} from "../../services/accountService";

export function useAccountActions(refetch: () => void) {
  const [useCreditsMutation] = useMutation(USE_CREDITS);
  const [refundCreditsMutation] = useMutation(REFUND_CREDITS);
  const [refundMoneyMutation] = useMutation(REFUND_MONEY);
  const [nullifyAccountMutation] = useMutation(NULLIFY_ACCOUNT);

  const useCredits = async (
    creditCode: string,
    cost: number,
    note?: string
  ) => {
    await useCreditsMutation({
      variables: { input: { creditCode, cost, note: note ?? "" } },
    });
    await refetch();
  };

  const refundCredits = async (
    creditCode: string,
    cost: number,
    note?: string
  ) => {
    await refundCreditsMutation({
      variables: { input: { creditCode, cost, note: note ?? "" } },
    });
    await refetch();
  };

  const refundMoney = async (
    creditCode: string,
    money: number,
    note?: string
  ) => {
    await refundMoneyMutation({
      variables: { input: { creditCode, money, note: note ?? "" } },
    });
    await refetch();
  };

  const nullifyAccount = async (creditCode: string, note?: string) => {
    await nullifyAccountMutation({
      variables: { input: { creditCode, note: note ?? "" } },
    });
    await refetch();
  };

  return { useCredits, refundCredits, refundMoney, nullifyAccount };
}

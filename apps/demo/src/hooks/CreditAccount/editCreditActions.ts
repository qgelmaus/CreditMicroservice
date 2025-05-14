import { useMutation } from "@apollo/client";
import {
  USE_CREDITS,
  REFUND_CREDITS,
  REFUND_MONEY,
  NULLIFY_ACCOUNT,
  TRANSFER_CREDITS,
} from "../../services/accountService";

export function EditCreditActions(refetch: () => void) {
  const [ExecuteUseCreditsMutation] = useMutation(USE_CREDITS);
  const [RefundCreditsMutation] = useMutation(REFUND_CREDITS);
  const [RefundMoneyMutation] = useMutation(REFUND_MONEY);
  const [NullifyAccountMutation] = useMutation(NULLIFY_ACCOUNT);
  const [TransferCreditsMutation] = useMutation(TRANSFER_CREDITS);

  const executeUseCredits = async (
    creditCode: string,
    cost: number,
    note?: string,
  ) => {
    await ExecuteUseCreditsMutation({
      variables: { input: { creditCode, cost, note: note ?? "" } },
    });
    await refetch();
  };

  const transferCredits = async (
    fromCode: string,
    toCode: string,
    amount: number,
    note?: string,
  ) => {
    await TransferCreditsMutation({
      variables: {
        input: {
          fromCreditCode: fromCode,
          toCreditCode: toCode,
          amount: amount,
          note: note,
        },
      },
    });
    await refetch();
  };

  const refundCredits = async (
    creditCode: string,
    cost: number,
    note?: string,
  ) => {
    await RefundCreditsMutation({
      variables: { input: { creditCode, cost, note: note ?? "" } },
    });
    await refetch();
  };

  const refundMoney = async (
    creditCode: string,
    money: number,
    note?: string,
  ) => {
    await RefundMoneyMutation({
      variables: { input: { creditCode, money, note: note ?? "" } },
    });
    await refetch();
  };

  const nullifyAccount = async (creditCode: string, note?: string) => {
    await NullifyAccountMutation({
      variables: { input: { creditCode, note: note ?? "" } },
    });
    await refetch();
  };

  return {
    executeUseCredits,
    transferCredits,
    refundCredits,
    refundMoney,
    nullifyAccount,
  };
}

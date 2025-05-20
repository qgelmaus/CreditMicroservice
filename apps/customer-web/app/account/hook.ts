import { useLazyQuery, useMutation } from "@apollo/client";
import { ALL_ACCOUNTS_BY_EMAIL } from "../../repository/queries/allAccountsByEmail";

export const useAllAccountsByEmail = () => {
  return useLazyQuery(ALL_ACCOUNTS_BY_EMAIL, {
    fetchPolicy: "network-only",
  });
};

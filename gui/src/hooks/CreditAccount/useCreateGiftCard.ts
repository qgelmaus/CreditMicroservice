import { useMutation } from "@apollo/client";
import { USE_CREATE_GIFT_ACCOUNT } from "../../services/accountService";

export function useCreateGiftCard() {
	const [createGiftCardMutation] = useMutation(USE_CREATE_GIFT_ACCOUNT);

	const createGiftCard = async (email: string, purchaseAmount: number) => {
		const account = await createGiftCardMutation({
			variables: { input: { email, purchaseAmount } },
		});

		return account;
	};

	return { createGiftCard };
}

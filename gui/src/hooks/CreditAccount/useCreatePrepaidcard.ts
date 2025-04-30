import { useMutation } from "@apollo/client";
import { USE_CREATE_PREPAID_ACCOUNT } from "../../services/accountService";

export function useCreatePrepaidCard() {
	const [createPrepaidCardMutation] = useMutation(USE_CREATE_PREPAID_ACCOUNT);

	const createPrepaidCard = async (
		email: string,
		pricePerTreatment: number,
		treatmentCount: number,
	) => {
		const account = await createPrepaidCardMutation({
			variables: { input: { email, pricePerTreatment, treatmentCount } },
		});

		return account;
	};

	return { createPrepaidCard };
}

import { Resolvers } from "apps/api/src/shared/types/codegen.types";
import { createPaymentDetails } from "../commands/createPaymentDetails";


export const paymentResolvers: Resolvers = {
	PaymentDetails: {

	},

	Mutation: {
		createPaymentDetails,

	},

	Query: {

	}
}
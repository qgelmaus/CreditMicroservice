import { Invoice } from "../domain/Invoice";

type CreateInvoiceInput = {
	customerEmail: string;
	amount: number;
	currency?: string;
	description: string;
};

export async function createInvoice(input: CreateInvoiceInput) {
	const invoice = Invoice.createNew({
		customerEmail: input.customerEmail,
		amount: input.amount,
		currency: input.currency ?? "DKK",
		description: input.description,
	});

	// TODO Gem i database her

	// TODO Send e-mail med invoice (kan aktiveres senere)
	// TODO await sendMail(invoice)

	return invoice;
}

export type InvoiceProps = {
	invoiceId: string;
	customerEmail: string;
	amount: number;
	currency: string;
	description: string;
	issuedAt: Date;
	dueAt: Date;
	isPaid: boolean;
};

export class Invoice {
	private props: InvoiceProps;

	constructor(props: InvoiceProps) {
		this.props = { ...props };
	}

	static createNew(data: {
		customerEmail: string;
		amount: number;
		currency: string;
		description: string;
		dueInDays?: number;
	}): Invoice {
		const now = new Date();
		const dueAt = new Date(now);
		dueAt.setDate(dueAt.getDate() + (data.dueInDays ?? 14));

		return new Invoice({
			invoiceId: generateInvoiceId(),
			customerEmail: data.customerEmail,
			amount: data.amount,
			currency: data.currency,
			description: data.description,
			issuedAt: now,
			dueAt,
			isPaid: false,
		});
	}

	markAsPaid() {
		this.props.isPaid = true;
	}

	getDataToPersist() {
		return { ...this.props };
	}

	get id() {
		return this.props.invoiceId;
	}

	get email() {
		return this.props.customerEmail;
	}

	get dueDate() {
		return this.props.dueAt;
	}
}

function generateInvoiceId(): string {
	return `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

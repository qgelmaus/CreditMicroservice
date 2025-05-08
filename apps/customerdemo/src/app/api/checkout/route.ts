import Stripe from "stripe";
import { type NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
	console.log("Loaded Stripe key:", process.env.STRIPE_SECRET_KEY);
	const body = await req.json();

	const { email, type, details } = body;

	const lineItems = [];

	if (type === "GIFT_CARD") {
		lineItems.push({
			price_data: {
				currency: "dkk",
				product_data: { name: "Gavekort" },
				unit_amount: details.credits * 100, // fx 1 credit = 1 DKK
			},
			quantity: 1,
		});
	}

	if (type === "PREPAID_CARD") {
		lineItems.push({
			price_data: {
				currency: "dkk",
				product_data: { name: "Klippekort" },
				unit_amount: details.pricePerTreatment * details.treatmentCount * 100,
			},
			quantity: 1,
		});
	}

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: lineItems,
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_URL}/flow?success=true`,
		cancel_url: `${process.env.NEXT_PUBLIC_URL}/flow?canceled=true`,
		customer_email: email,
	});

	return NextResponse.json({ url: session.url });
}

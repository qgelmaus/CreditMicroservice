import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
});
export async function POST(req) {
    const body = await req.json();
    const { email, type, details } = body;
    const lineItems = [];
    if (type === "GIFT_CARD") {
        lineItems.push({
            price_data: {
                currency: "dkk",
                product_data: { name: "Gavekort" },
                unit_amount: details.credits * 100,
            },
            quantity: 1,
        });
    }
    if (type === "PREPAID_CARD") {
        const { pricePerTreatment, treatmentCount } = details;
        let discount = 0;
        if (treatmentCount >= 10) {
            discount = 0.16;
        }
        else if (treatmentCount >= 5) {
            discount = 0.12;
        }
        const rawPrice = pricePerTreatment * treatmentCount;
        const discountedPrice = Math.round(rawPrice * (1 - discount) * 100); // i øre
        lineItems.push({
            price_data: {
                currency: "dkk",
                product_data: {
                    name: `Klippekort – ${treatmentCount} klip`,
                    description: `Rabatteret klippekort med ${discount * 100}% rabat`,
                },
                unit_amount: discountedPrice,
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

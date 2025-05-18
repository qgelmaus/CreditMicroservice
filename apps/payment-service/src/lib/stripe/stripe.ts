import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

interface CreateStripeSessionInput {
  email: string;
  purchaseAmount: number;
  paymentId: string;
}

export async function createStripeCheckoutSession({
  email,
  purchaseAmount,
  paymentId,
}: CreateStripeSessionInput): Promise<string> {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "dkk",
          product_data: {
            name: "Klippekort / GaveKort",
          },
          unit_amount: Math.round(purchaseAmount * 100),
        },
        quantity: 1,
      },
    ],
    metadata: {
      paymentId,
    },
    success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel`,
  });

  return session.url!;
}

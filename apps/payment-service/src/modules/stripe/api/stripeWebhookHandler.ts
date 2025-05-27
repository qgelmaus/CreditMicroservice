import { services } from "apps/payment-service/src/context/services.ts";
import { stripe } from "apps/payment-service/src/lib/stripe/stripe.ts";
import type { Request, Response } from "express";

export const stripeWebhookHandler = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;
  const rawBody = req.body;

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;
      const paymentId = session.metadata?.paymentId;

      if (paymentId) {
        await services.paymentDetailsService.changePaymentStatus(
          paymentId,
          "COMPLETED"
        );
      }
    }

    res.status(200).json({ received: true });
  } catch (err) {
    res.status(400).send("Invalid signature");
  }
};

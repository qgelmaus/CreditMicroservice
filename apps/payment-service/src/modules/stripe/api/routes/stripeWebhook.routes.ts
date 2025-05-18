import express from "express";
import { stripeWebhookHandler } from "../stripeWebhookHandler.ts";

const router = express.Router();

router.post("/", stripeWebhookHandler);

export default router;

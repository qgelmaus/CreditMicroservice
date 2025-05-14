import { stitchSchemas } from "@graphql-tools/stitch";
import { loadCreditSchema } from "../services/creditService";
import { loadPaymentSchema } from "../services/paymentService";

export async function buildGatewaySchema() {
  const creditSchema = await loadCreditSchema();
  const paymentSchema = await loadPaymentSchema();

  return stitchSchemas({
    subschemas: [{ schema: creditSchema }, { schema: paymentSchema }],
  });
}

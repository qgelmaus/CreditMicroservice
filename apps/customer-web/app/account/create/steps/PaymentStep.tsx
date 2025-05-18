import { Button, Dropdown, FormRow, Grid, Section } from "@ui";
import type { ChangeEvent } from "react";

interface Props {
  email: string;
  amount: string;
  selectedPaymentOption: "STRIPE" | "MOBILEPAY";
  setSelectedPaymentOption: (value: "STRIPE" | "MOBILEPAY") => void;
  onPay: () => void;
}

export function PaymentStep({
  email,
  amount,
  selectedPaymentOption,
  setSelectedPaymentOption,
  onPay,
}: Props) {
  const paymentOptions = [
    { label: "MobilePay", value: "MOBILEPAY" },
    { label: "Kreditkort", value: "STRIPE" },
  ];

  return (
    <Section title="Betaling">
      <Grid>
        <Grid columns={1} gap="0.5rem">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Beløb:</strong> {amount} kr.
          </p>
          <FormRow error="" label="">
            <Dropdown
              label="Vælg betalingsmetode"
              value={selectedPaymentOption}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedPaymentOption(e.target.value as "STRIPE" | "MOBILEPAY")
              }
              options={paymentOptions}
            />
          </FormRow>
        </Grid>

        <Button onClick={onPay}>Bekræft og betal</Button>
      </Grid>
    </Section>
  );
}
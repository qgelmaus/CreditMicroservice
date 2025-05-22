'use client';
import { Button, Card, Grid, Section } from "@ui";

interface Props {
  selectedType: "GIFT_CARD" | "PREPAID_CARD";
  email: string;
  amount: number;
  cost: number;
  message: string;
  onConfirm: () => void;
}

export function SummaryStep({
  selectedType,
  email,
  amount,
  cost,
  message,
  onConfirm,
}: Props) {
  return (
    <Section title="Opsummering">
      <Grid>
        <Card>
          <Grid columns={1} gap="0.5rem">
            <p>
              <strong>Type:</strong>{" "}
              {selectedType === "GIFT_CARD" ? "Gavekort" : "Klippekort"}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Kreditter:</strong> {amount} kr.
            </p>
            <p>
              <strong>Pris:</strong> {cost} kr.
            </p>
            <p>
              <strong>Besked til modtager:</strong> {message}
            </p>
          </Grid>
        </Card>
        <Button onClick={onConfirm}>Gå til betaling</Button>
      </Grid>
    </Section>
  );
}

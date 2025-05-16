"use client";

import {
  PageShell,
  PageHeader,
  Section,
  FormRow,
  Input,
  Button,
  Card,
} from "@hovedopgave2025/ui";
import { useState } from "react";

export default function GavekortSide() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // TODO: Send mutation til backend
    console.log("Send gavekort:", { email, amount });
  };

  return (
    <PageShell>
      <PageHeader title="Køb et gavekort" subtitle="Forkæl en du holder af" />
      <Section title="Information">
        <form onSubmit={handleSubmit}>
          <FormRow label="Email" htmlFor="email" error={!email && submitted ? "Påkrævet" : ""}>
            <Input
              id="email"
              label=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Indtast modtagerens email"
            />
          </FormRow>
          <FormRow label="Beløb" htmlFor="amount" error={!amount && submitted ? "Påkrævet" : ""}>
            <Input
              id="amount"
              label=""
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="F.eks. 500"
            />
          </FormRow>
          <Button>Køb gavekort</Button>
        </form>
      </Section>

      {submitted && email && amount && (
        <Section title="Opsummering">
          <Card>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Beløb:</strong> {amount} kr.
            </p>
          </Card>
        </Section>
      )}
    </PageShell>
  );
}

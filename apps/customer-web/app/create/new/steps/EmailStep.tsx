"use client";
import { FormRow, Input, Section, Button } from "@ui";
import type { FormEvent } from "react";

interface Props {
  email: string;
  setEmail: (value: string) => void;
  onContinue: () => void;
}

export function EmailStep({ email, setEmail, onContinue }: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      onContinue();
    }
  };

  return (
    <Section title="Indtast oplysninger">
      <form onSubmit={handleSubmit}>
        <FormRow label="Email" htmlFor="email" error={!email ? "Påkrævet" : ""}>
          <Input
            id="email"
            label=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
          />
        </FormRow>
        <Button>Fortsæt</Button>
      </form>
    </Section>
  );
}

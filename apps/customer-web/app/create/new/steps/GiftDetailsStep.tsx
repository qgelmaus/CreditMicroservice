'use client';
import { Button, FormRow, Input, Section, TextArea } from "@ui";
import type { ChangeEvent } from "react";

interface Props {
  amount: number;
  setAmount: (value: number) => void;
  message: string;
  setMessage: (value: string) => void;
  onContinue: () => void;
}

export function GiftDetailsStep({ amount, setAmount, message, setMessage, onContinue }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount) {
      onContinue();
    }
  };

  return (
    <Section title="Indtast gavekort oplysninger">
      <form onSubmit={handleSubmit}>
        <FormRow
          label="Ønsket mængde kredditter"
          htmlFor="amount"
          error={!amount ? "Påkrævet" : ""}
        >
          <Input
            id="amount"
            type="number"
            label=""
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}
            placeholder="F.eks. 500"
          />
        </FormRow>

        <FormRow
          label="Besked til modtager"
          htmlFor="message"
        >
          <TextArea
            id="message"
            label=""
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            placeholder="Skriv en besked til modtageren"
          />
        </FormRow>

        <Button>Fortsæt</Button>
      </form>
    </Section>
  );
}
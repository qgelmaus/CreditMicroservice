"use client";
import { Dropdown, Section, Button } from "@ui";

interface Props {
  selectedType: "GIFT_CARD" | "PREPAID_CARD";
  setSelectedType: (value: "GIFT_CARD" | "PREPAID_CARD") => void;
  onContinue: () => void;
}

export function ChooseTypeStep({
  selectedType,
  setSelectedType,
  onContinue,
}: Props) {
  const typeOptions = [
    { label: "Gavekort", value: "GIFT_CARD" },
    { label: "Klippekort", value: "PREPAID_CARD" },
  ];

  return (
    <Section title="Vælg type">
      <Dropdown
        label="Vælg type"
        value={selectedType}
        onChange={(e) =>
          setSelectedType(e.target.value as "GIFT_CARD" | "PREPAID_CARD")
        }
        options={typeOptions}
      />
      {selectedType && (
        <div style={{ marginTop: "1rem" }}>
          <Button onClick={onContinue}>Næste</Button>
        </div>
      )}
    </Section>
  );
}

export default ChooseTypeStep;

'use client';
import { Button, Dropdown, FormRow, Input, Section } from "@ui";
import type { ChangeEvent } from "react";

interface Props {
  treatmentCount: number;
  setTreatmentCount: (value: number) => void;
  pricePerTreatment: number;
  setPricePerTreatment: (value: number) => void;
  onContinue: () => void;
}

export function PrepaidDetailsStep({
  treatmentCount,
  setTreatmentCount,
  pricePerTreatment,
  setPricePerTreatment,
  onContinue,
}: Props) {
  const treatmentCountOptions = [
    { label: "5 behandlinger (12% rabat)", value: 5 },
    { label: "10 behandlinger (16% rabat)", value: 10 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pricePerTreatment && treatmentCount) {
      onContinue();
    }
  };

  return (
    <Section title="Indtast klippekort oplysninger">
      <form onSubmit={handleSubmit}>
        <FormRow
          label="Pris per behandling (kr)"
          htmlFor="pricePerTreatment"
          error={!pricePerTreatment ? "Påkrævet" : ""}
        >
          <Input
            id="pricePerTreatment"
            type="number"
            label=""
            value={pricePerTreatment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPricePerTreatment(Number(e.target.value))
            }
          />
        </FormRow>

        <FormRow label="Vælg antal behandlinger" htmlFor="treatmentCount">
          <Dropdown
            label="Antal behandlinger"
            value={treatmentCount}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTreatmentCount(Number(e.target.value))
            }
            options={treatmentCountOptions}
          />
        </FormRow>

        <Button>Fortsæt</Button>
      </form>
    </Section>
  );
}

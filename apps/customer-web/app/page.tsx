"use client";
import { PageHeader, Section, Button, Card, Tag } from "@hovedopgave2025/ui";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <PageHeader
        title="Hovedopgave 2025"
        subtitle="Velkommen til kunde demoen af hovedopgaven"
      />

      <Section title="Hvordan fungerer det?">
        <ul>
          <li>På opret kan du udforske opret flowet </li>
          <li>
            På Administrér kan du udforske din ny oprettede kreditbeholdning
          </li>
        </ul>
      </Section>
    </div>
  );
}

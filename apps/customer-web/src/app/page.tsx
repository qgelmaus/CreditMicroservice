"use client";

import {
  PageShell,
  PageHeader,
  Section,
  Button,
  Card,
  Tag,
} from "@hovedopgave2025/ui";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>

      <PageHeader
        title="Velkommen til RaskRask Gavekort"
        subtitle="Giv velvære – hurtigt og nemt"
        />

      <Section>
        <Card>
          <p>
            Hos os kan du købe gavekort og klippekort til massage og behandlinger –
            lige til at sende videre med det samme.
          </p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <Link href="/gavekort">
              <Button>Køb gavekort</Button>
            </Link>
            <Tag>Gavekort</Tag>
            <Tag>Klippekort</Tag>
          </div>
        </Card>
      </Section>

      <Section title="Hvordan fungerer det?">
        <ul>
          <li>1. Vælg gavekort eller klippekort</li>
          <li>2. Indtast email og beløb</li>
          <li>3. Betal online – modtageren får en email med gavekort</li>
        </ul>
      </Section>
        </div>
    
  );
}

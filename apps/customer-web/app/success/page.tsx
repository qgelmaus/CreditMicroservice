"use client";

import { PageHeader, Section, Button, Card, Grid } from "@ui";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="p-6">
      <Grid maxWidth="500px" columns={1}>
        <PageHeader
          title="Tak for din bestilling!"
          subtitle="Din betaling er gennemført."
        />

        <Section>
          <p>
            Din kreditbeholdning er nu oprettet og du modtager en kvittering pr.
            mail. Hvis du har spørgsmål, er du velkommen til at kontakte os.
          </p>

          <div className="mt-4"></div>
        </Section>
        <Link href="/">
          <Button>Gå til forsiden</Button>
        </Link>
      </Grid>
    </div>
  );
}

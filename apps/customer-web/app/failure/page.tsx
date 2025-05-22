// app/failure/page.tsx
import { PageHeader, Section, Button } from "@ui";
import Link from "next/link";

export default function FailurePage() {
  return (
    <div className="p-6">
      <PageHeader title="Noget gik galt" subtitle="Betalingen blev ikke gennemført" />
      <Section>
        <p>Prøv igen, eller kontakt os hvis problemet fortsætter.</p>
        <Link href="/">
          <Button>Til forsiden</Button>
        </Link>
      </Section>
    </div>
  );
}
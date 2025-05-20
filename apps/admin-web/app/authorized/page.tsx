'use client'
import { Grid, Section } from "@ui";
import styles from "../page.module.css"

export default function Page() {
  return (
    <div className={styles.page}>
      <Grid columns={2}>

      <Section>


      <h1 className="text-2xl font-bold">Welcome to the Authorized Page</h1>
      <p className="mt-4 text-lg">This is a protected area of the application.</p>
      </Section>

      <Section>


      <h1 className="text-2xl font-bold">Welcome to the Authorized Page</h1>
      <p className="mt-4 text-lg">This is a protected area of the application.</p>
      </Section>
      </Grid>
    </div>
  );
}
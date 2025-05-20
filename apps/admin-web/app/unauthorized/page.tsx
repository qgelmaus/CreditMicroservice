import { Grid, Section } from "@ui";
import styles from "../page.module.css";

export default function UnauthorizedPage() {
  return (
    <div className={styles.page}>
      <Section>
      <Grid >
      <h1 >Unauthorized Access</h1>
      <p >You do not have permission to view this page.</p>
      </Grid>
      </Section>
    </div>
  );
}
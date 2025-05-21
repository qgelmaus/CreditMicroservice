'use client';

import styles from "./page.module.css";
import { Button, Grid, Section } from "@ui";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
 

  const handleLogin = () => {
    router.push("/authorized")
  }
  return (
    <div className={styles.page}>
      <Section>
        <Grid>
      <h1 className={styles.title}>Welcome to the Admin Web</h1>
      <p className={styles.description}>
        This is the admin web application for managing your content.
      </p>
      <Button onClick={handleLogin} > Login </Button>
        </Grid>
      
      </Section>
    </div>
  );
}

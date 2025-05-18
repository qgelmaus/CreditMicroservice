'use client';

import styles from "./page.module.css";
import { Button } from "@ui";
import { useRouter } from "next/navigation";

const router = useRouter();

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to the Admin Web</h1>
      <p className={styles.description}>
        This is the admin web application for managing your content.
      </p>

      <Button onClick={() => router.push("/account/create")} > Login </Button>
      
    </div>
  );
}

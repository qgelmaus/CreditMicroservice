import React from "react";
import styles from "./PageShell.module.css";
import { Container } from "../Container/Container";
import { PageHeader } from "../PageHeader/PageHeader";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export const PageShell = ({ children, className = "" }: PageShellProps) => {
  return (
    <div className={`${styles.shell} ${className}`}>
      
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      {/* Footer kan tilføjes her hvis ønsket */}
    </div>
  );
};

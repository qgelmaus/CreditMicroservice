import React from "react";
import styles from "./PageShell.module.css";
import { Container } from "../Container/Container";
import { PageHeader } from "../PageHeader/PageHeader";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode;
}

export const PageShell = ({ children, className = "", headerContent }: PageShellProps) => {
  return (
    <div className={`${styles.shell} ${className}`}>
      <header style={{ padding: "3rem 0", borderBottom: "1px solid #ddd" }}>
        <Container>
          
          {headerContent ?? <h1 style={{ fontSize: "1.25rem"}}> Hovedopgave 2025 - Customer-web </h1>}
        </Container>
      </header>
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <footer style={{ padding: "1.25rem 0", borderTop: "1px solid #ddd", marginTop: "2rem" }}>
        <Container>
          <p style={{ fontSize: "0.85rem", color: "#777" }}>
            © {new Date().getFullYear()} Steffen Køhler Lassen & Katrine Clemens Hansen
          </p>
        </Container>
      </footer>
    </div>
  );
};

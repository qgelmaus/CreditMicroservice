// src/components/Layout.tsx
import { ReactNode } from "react";
import { LayoutProps } from "./props/LayoutProps";
import { Navbar } from "./Navbar";

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{ backgroundColor: "#319795", color: "white", padding: "1rem" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1>CreditAccount Demo</h1>
        </div>
      </header>

      <Navbar />
      <main
        style={{
          flex: 1,
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {children}
      </main>

      <footer style={{ backgroundColor: "#f7fafc", padding: "1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", color: "#4a5568" }}>
          <h2>© 2025 RaskRask Demo</h2>
        </div>
      </footer>
    </div>
  );
}

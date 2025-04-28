// src/components/Layout.tsx

import { LayoutProps } from "./props/LayoutProps";

import { TopBar } from "./Topbar";

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{ backgroundColor: "#319795", color: "white", padding: "1rem" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}></div>
      </header>
      <TopBar />

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
    </div>
  );
}

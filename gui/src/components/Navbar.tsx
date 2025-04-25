// src/components/Navbar.tsx
export function Navbar() {
  return (
    <nav style={{ backgroundColor: "#2c7a7b", padding: "1rem" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "1rem",
        }}
      >
        <a
          href="/"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Forside
        </a>
        <a
          href="/account"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Opret Konto
        </a>
      </div>
    </nav>
  );
}

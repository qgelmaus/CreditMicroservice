import { Link } from "react-router-dom";
import { theme } from "../ui/theme";
import { Navbar } from "./Navbar";

export function TopBar() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: theme.colors.primary,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "0.5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.5rem 2rem",
          display: "flex",
          flexDirection: "column", // <--- RIGTIGT
          alignItems: "center", // <--- Centrerer indholdet
          gap: "0.5rem", // <--- Lidt luft mellem overskrift og navbar
        }}
      >
        {/* Overskrift / Logo */}
        <Link
          to="/"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: theme.colors.white,
            textDecoration: "none",
          }}
        >
          Credit Microservice
        </Link>

        {/* Navigation */}
        <Navbar />
      </div>
    </header>
  );
}

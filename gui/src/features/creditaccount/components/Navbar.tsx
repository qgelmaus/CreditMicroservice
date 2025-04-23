import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#000", color: "#fff" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1 style={{ margin: 0 }}>CreditApp</h1>
      </Link>
    </nav>
  );
}
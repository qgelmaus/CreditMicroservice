import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";

// src/pages/HomePage.tsx
export default function HomePage() {
  return (
    <div>
      <Heading level={1}>Opret ny konto</Heading>
      <form>
        <label>Email:</label>
        <input placeholder="Indtast email " type="email" />
      </form>
    </div>
  );
}

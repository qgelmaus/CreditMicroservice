interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h2>
      {subtitle && <p style={{ color: "#666", fontSize: "0.875rem" }}>{subtitle}</p>}
    </div>
  );
}
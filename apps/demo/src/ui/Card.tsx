// src/ui/Card.tsx
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  link?: string;
};

export function Card({ children, style, link }: CardProps) {
  const baseStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "2rem",
    marginBottom: "1rem",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    ...style,
  };

  if (link) {
    return (
      <Link
        to={link}
        style={baseStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        {children}
      </Link>
    );
  }

  return <div style={baseStyle}>{children}</div>;
}

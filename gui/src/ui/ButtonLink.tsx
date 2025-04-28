// src/ui/ButtonLink.tsx
import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
};

export function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#319795",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#2c7a7b";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#319795";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {children}
    </Link>
  );
}

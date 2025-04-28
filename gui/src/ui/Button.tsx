// src/ui/Button.tsx

import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", ...props }: ButtonProps) {
  const baseStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  } as const;

  const variantStyles = {
    primary: {
      backgroundColor: "#319795",
      color: "white",
    },
    secondary: {
      backgroundColor: "#e2e8f0",
      color: "#2d3748",
    },
  } as const;

  return (
    <button
      {...props}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
}

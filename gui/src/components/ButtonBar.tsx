// src/ui/ButtonBar.tsx
import { ReactNode } from "react";
import { theme } from "../ui/theme";

type ButtonBarProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export function ButtonBar({ children, style }: ButtonBarProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.lg,
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

import { InputHTMLAttributes } from "react";
import { theme } from "./theme";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ style, ...props }: InputProps) {
  return (
    <input
      {...props}
      style={{
        border: `1px solid ${theme.colors.muted}`,
        borderRadius: theme.borderRadius.small,
        padding: theme.spacing.sm,
        fontFamily: theme.fonts.body,
        fontSize: "1rem",
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}

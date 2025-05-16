"use client";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded-md font-medium transition";

  const variants: Record<Variant, string> = {
    primary: "bg-slate-800 text-white hover:bg-slate-600",
    secondary:
      "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

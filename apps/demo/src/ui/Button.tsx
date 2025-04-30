// src/ui/Button.tsx

import type { ButtonHTMLAttributes } from "react";
import { theme } from "./theme";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", ...props }: ButtonProps) {
	const baseStyle = {
		padding: "0.5rem 1rem",
		border: "none",
		borderRadius: "4px",
		height: "45px",
		width: "100px",
		fontWeight: "bold",
		cursor: "pointer",
	} as const;

	const variantStyles = {
		primary: {
			backgroundColor: theme.colors.buttonPrimaryColor,
			color: "white",
		},
		secondary: {
			backgroundColor: theme.colors.buttonSecondaryColor,
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

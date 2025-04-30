// src/ui/ButtonLink.tsx
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import { theme } from "./theme";

type ButtonLinkProps = LinkProps & {
	children: ReactNode;
};

export function ButtonLink({ children, ...props }: ButtonLinkProps) {
	return (
		<Link
			{...props}
			style={{
				padding: "0.5rem 1rem",
				backgroundColor: theme.colors.buttonSecondaryColor,
				color: theme.colors.buttonPrimaryColor,
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

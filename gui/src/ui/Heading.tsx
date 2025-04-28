import type { JSX, ReactNode } from "react";
import { theme } from "./theme";

type HeadingProps = {
	children: ReactNode;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	style?: React.CSSProperties;
};

export function Heading({ children, level = 1, style }: HeadingProps) {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	return (
		<Tag
			style={{
				fontFamily: theme.fonts.heading,
				fontWeight: 600,
				marginBottom: theme.spacing.sm,
				color: theme.colors.headingColor,
				...style,
			}}
		>
			{children}
		</Tag>
	);
}

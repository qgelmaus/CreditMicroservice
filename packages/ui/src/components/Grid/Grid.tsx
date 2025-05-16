import React from "react";
import styles from "./Grid.module.css";

interface GridProps {
	children: React.ReactNode;
	gap?: string;
	columns?: number;
	minWidth?: string;
	maxWidth?: string;
	className?: string;
}

export const Grid = ({
	children,
	gap = "1rem",
	columns,
	minWidth,
	maxWidth,
	className = "",
}: GridProps) => {
	const gridStyle: React.CSSProperties = {
		gap,
		gridTemplateColumns: columns
			? `repeat(${columns}, 1fr)`
			: minWidth
				? `repeat(auto-fit, minmax(${minWidth}, 1fr))`
				: undefined,
		maxWidth: maxWidth,
		margin: "0 auto",
	};

	return (
		<div className={`${styles.grid} ${className}`} style={gridStyle}>
			{children}
		</div>
	);
};

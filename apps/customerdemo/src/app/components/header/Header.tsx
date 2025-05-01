// apps/customerdemo/src/components/TopBar.tsx
"use client";

import Link from "next/link";
import { Navbar } from "../nav/Navbar";

const theme = {
	colors: {
		primary: "#286bb2",
		white: "#ffffff",
	},
};

export function Header() {
	return (
		<header
			style={{
				width: "100%",
				backgroundColor: theme.colors.primary,
				boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
				position: "sticky",
				top: 0,
				zIndex: 1000,
				padding: "0.5rem 0",
			}}
		>
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0.5rem 2rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "0.5rem",
				}}
			>
				<Link
					href="/"
					style={{
						fontSize: "2rem",
						fontWeight: "bold",
						color: theme.colors.white,
						textDecoration: "none",
					}}
				>
					Credit Microservice
				</Link>
			</div>
		</header>
	);
}

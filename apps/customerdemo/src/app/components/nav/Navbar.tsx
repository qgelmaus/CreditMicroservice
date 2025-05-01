// apps/customerdemo/src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ to: "/", label: "Forside" },
	{ to: "/customer", label: "Customer Flow" },
	{ to: "/admin", label: "Admin Flow" },
	{ to: "/transactions", label: "Bookkeeping" },
];

const theme = {
	colors: {
		white: "#ffffff",
	},
};

export function Navbar() {
	const pathname = usePathname(); // ← fungerer ligesom useLocation().pathname

	return (
		<nav className="bg-[#286bb2] text-white">
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					display: "flex",
					gap: "1.5rem",
					alignItems: "center",
					justifyContent: "center",
					padding: "0.5rem 0",
				}}
			>
				{navLinks.map((link) => {
					const isActive = pathname === link.to;

					return (
						<Link
							key={link.to}
							href={link.to}
							style={{
								color: theme.colors.white,
								fontSize: "1.1rem",
								fontWeight: isActive ? 700 : 500,
								textDecoration: "none",
								padding: "0.25rem 0.5rem",
								transition: "color 0.2s, border-bottom 0.2s",
								borderBottom: isActive
									? `2px solid ${theme.colors.white}`
									: "2px solid transparent",
							}}
						>
							{link.label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}

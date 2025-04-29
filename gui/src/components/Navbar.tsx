import { Link, useLocation } from "react-router-dom";
import { theme } from "../ui/theme";

const navLinks = [
	{ to: "/", label: "Forside" },
	{ to: "/customer", label: "Customer Flow" },
	{ to: "/admin", label: "Admin Flow" },
	{ to: "/transactions", label: "Transactions" },
];

export function Navbar() {
	const location = useLocation(); // <- får nuværende URL

	return (
		<nav>
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
					const isActive = location.pathname === link.to;

					return (
						<Link
							key={link.to}
							to={link.to}
							style={{
								color: theme.colors.white,
								fontSize: "1.1rem",
								fontWeight: isActive ? 700 : 500, // Fed tekst hvis aktiv
								textDecoration: "none",
								padding: "0.25rem 0.5rem",
								transition: "color 0.2s, border-bottom 0.2s",
								borderBottom: isActive
									? `2px solid ${theme.colors.white}` // Hvis aktiv, vis underline
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

import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<Navbar />
			<main
				style={{ maxWidth: "768px", margin: "2rem auto", padding: "0 1rem" }}
			>
				{children}
			</main>
		</div>
	);
}

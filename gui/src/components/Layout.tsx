// src/components/Layout.tsx

import { theme } from "../ui/theme";
import { BottomBar } from "./BottomBar";
import type { LayoutProps } from "./props/LayoutProps";

import { TopBar } from "./Topbar";

export function Layout({ children }: LayoutProps) {
	return (
		<div
			style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
		>
			<TopBar />
			<main
				style={{
					flex: 1,
					padding: "2rem",
					maxWidth: "1200px",
					margin: "0 auto",
					color: theme.colors.background,
				}}
			>
				{children}
			</main>
			<BottomBar />
		</div>
	);
}

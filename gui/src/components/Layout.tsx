import { theme } from "../ui/theme";
import { BottomBar } from "./BottomBar";
import type { LayoutProps } from "./props/LayoutProps";
import { TopBar } from "./Topbar";

export function Layout({ children }: LayoutProps) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				backgroundColor: theme.colors.background, // background, ikke color!
			}}
		>
			<TopBar />
			<main
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					padding: "2rem",
					maxWidth: "1200px",
					width: "100%",
					minHeight: "600px", // <- Tilføjet minimumshøjde til main-indhold
					margin: "0 auto",
				}}
			>
				{children}
			</main>
			<BottomBar />
		</div>
	);
}

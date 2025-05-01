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
				backgroundColor: "theme.colors.background",
			}}
		>
			<TopBar />
			<main
				style={{
					flex: 1,
					display: "flex",
					justifyContent: "center", // centrerer containeren horisontalt
				}}
			>
				<div
					className="page-content-wrapper"
					style={{
						flexGrow: 1,
						width: "100%",
						maxWidth: "1200px",
						minWidth: "1400px",
						padding: "2rem",
						minHeight: "600px", // sikrer stabil højde
						display: "flex",
						flexDirection: "column",
					}}
				>
					{children}
				</div>
			</main>
			<BottomBar />
		</div>
	);
}

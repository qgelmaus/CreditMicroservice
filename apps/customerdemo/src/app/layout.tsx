import "./globals.css";
import type { Metadata } from "next";
import Skeleton from "./components/skeleton/Skeleton";

export const metadata: Metadata = {
	title: "RaskRask Kundeportal",
	description: "Oversigt over bookinger, profil og klippekort",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="da">
			<body className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#111] font-sans">
				<Skeleton>{children}</Skeleton>
			</body>
		</html>
	);
}

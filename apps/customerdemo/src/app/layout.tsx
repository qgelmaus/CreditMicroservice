import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./components/container/Container";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import type { ReactNode } from "react";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "CreditService - CustomerDemo",
	description: "Demonstrates the customer flow",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="da">
			<body className=" flex flex-col min-h-screen font-sans">
				<Navigation />
				<main className="flex-grow px-4 py-8 sm:px-8">
					<div className=" max-w-5xl mx-auto bg-sand border border-gray-500 shadow-md rounded-xl p-6 sm:p-10">
						{children}
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}

// apps/customerdemo/src/components/skeleton/Skeleton.tsx
import type { ReactNode } from "react";
import { Header } from "../header/Header";
import { Navbar } from "../nav/Navbar";
import PageWrapper from "../pagewrapper/PageWrapper";
import Footer from "../footer/Footer";

export default function Skeleton({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<Navbar />
			<PageWrapper>{children}</PageWrapper>
			<Footer />
		</>
	);
}

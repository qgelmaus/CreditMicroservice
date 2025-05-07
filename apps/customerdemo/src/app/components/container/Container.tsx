import type { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

type ContainerProps = {
	children: ReactNode;
};

export default function Container({ children }: { children: ReactNode }) {
	return (
		<div>
			<Navigation />
			<div className="bg-white row-start-3 flex gap-[24px] flex-wrap items-center justify-center ">
				<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
					{children}
				</main>
			</div>
			<Footer />
		</div>
	);
}

// apps/customerdemo/src/components/PageWrapper.tsx
import type { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
	return (
		<main className="w-full max-w-4xl mx-auto flex-1 p-6 bg-white rounded-xl shadow-sm mt-6">
			{children}
		</main>
	);
}

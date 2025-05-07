export const metadata = {
	title: "Om os – CustomerDemo",
	description: "Læs mere om CustomerDemo og vores mission.",
};

export default function AboutPage() {
	return (
		<section className="space-y-4">
			<h1 className="text-3xl font-bold">Om os</h1>
			<p>
				CustomerDemo er et fiktivt firma, der demonstrerer hvordan man laver
				moderne webapps med Next.js, Tailwind og TypeScript.
			</p>
			<p>
				Formålet er at give udviklere en god startstruktur til at bygge
				skalerbare og veldesignede frontend-løsninger.
			</p>
		</section>
	);
}

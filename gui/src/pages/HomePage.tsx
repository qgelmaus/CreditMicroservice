import { ContentWindow } from "../components/ContentWindow";

// src/pages/HomePage.tsx
export default function HomePage() {
	return (
		<div>
			<ContentWindow title="Velkommen">
				<p>
					Dette system håndterer kreditkonti og transaktioner. <br /> Projektet
					er lavet i forbindelse med hovedopgaven på 5. semester af
					Datamatikeruddannelsen.
				</p>
				<p>Funktioner:</p>
				<ul>
					<li>Administrer kreditkonti (Klippe- og Gavekort).</li>
					<li>Registrerer ændringer via transaktioner.</li>
					<li>Vis og søg i transaktioner.</li>
				</ul>
				<p>Systemet er bygget med:</p>
				<ul>
					<li>TypeScript, GraphQL, Prisma, React og Apollo Client.</li>
				</ul>
			</ContentWindow>
		</div>
	);
}

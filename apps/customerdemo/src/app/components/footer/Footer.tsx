// apps/customerdemo/src/components/Footer.tsx
export default function Footer() {
	return (
		<footer className="p-4 bg-white text-sm text-center border-t mt-auto">
			© {new Date().getFullYear()} Steffen & Katrine
		</footer>
	);
}

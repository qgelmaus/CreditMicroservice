export function BottomBar() {
	return (
		<footer
			style={{
				marginTop: "40px",
				padding: "16px",
				borderTop: "1px solid #ddd",
				textAlign: "center",
				fontSize: "14px",
				color: "#666",
				backgroundColor: "#f9f9f9",
			}}
		>
			<div style={{ marginBottom: "8px" }}>
				© {new Date().getFullYear()} Katrine og Steffen
			</div>
			<div style={{ marginBottom: "4px" }}>
				Kontakt: <a href="steffen_lassen@pm.me">send@mail.nu</a>
			</div>
			<div style={{ fontSize: "12px", color: "#aaa" }}>
				Version 1.0.0 - Powered by Hovedopgave 2025 🚀
			</div>
		</footer>
	);
}

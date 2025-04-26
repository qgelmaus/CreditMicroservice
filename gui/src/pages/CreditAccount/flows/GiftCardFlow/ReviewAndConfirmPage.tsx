type ReviewAndConfirmPageProps = {
	formData: Record<string, any>;
	onNext: () => void;
	onBack: () => void;
};

export const ReviewAndConfirmPage = ({
	formData,
	onNext,
	onBack,
}: ReviewAndConfirmPageProps) => {
	return (
		<div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
			<h2 style={{ textAlign: "center" }}>Gennemse dine oplysninger</h2>

			<div style={{ marginBottom: "20px" }}>
				{Object.entries(formData).map(([key, value]) => (
					<div key={key} style={{ marginBottom: "10px" }}>
						<strong>{formatLabel(key)}:</strong> {String(value)}
					</div>
				))}
			</div>

			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<button type="button" onClick={onBack}>
					Tilbage
				</button>
				<button type="button" onClick={onNext}>
					Bekræft og fortsæt
				</button>
			</div>
		</div>
	);
};

// Lille hjælpefunktion til at gøre labels pænere
const formatLabel = (key: string) => {
	return key
		.replace(/([A-Z])/g, " $1") // sæt mellemrum foran store bogstaver
		.replace(/^./, (str) => str.toUpperCase()); // stort begyndelsesbogstav
};

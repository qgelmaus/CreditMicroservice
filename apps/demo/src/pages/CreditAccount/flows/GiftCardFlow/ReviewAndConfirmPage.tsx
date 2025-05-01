// ReviewAndConfirmPage.tsx

import type { GiftCardFormData } from "../../../../types/CreditAccount";

type ReviewAndConfirmPageProps = {
	formData: GiftCardFormData;
	onNext: () => void;
	onBack: () => void;
};

export const ReviewAndConfirmPage = ({
	formData,
	onNext,
	onBack,
}: ReviewAndConfirmPageProps) => {
	return (
		<div
			className="page-content-wrapper"
			style={{ maxWidth: "350px", margin: "0 auto", padding: "20px" }}
		>
			<h2 style={{ textAlign: "center" }}>Bekræft oplysninger</h2>

			<div style={{ marginTop: "20px", marginBottom: "20px" }}>
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

const formatLabel = (key: string) => {
	return key
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (str) => str.toUpperCase());
};

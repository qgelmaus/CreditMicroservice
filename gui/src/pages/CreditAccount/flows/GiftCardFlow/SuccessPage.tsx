type SuccessPageProps = {
	onDone?: () => void;
};

export const SuccessPage = ({ onDone }: SuccessPageProps) => {
	return (
		<div
			style={{
				maxWidth: "600px",
				margin: "0 auto",
				padding: "40px",
				textAlign: "center",
			}}
		>
			<h2>✅ Succes!</h2>
			<p>Din gavekort-konto er blevet oprettet.</p>

			{onDone && (
				<button type="button" onClick={onDone} style={{ marginTop: "20px" }}>
					Tilbage til forsiden
				</button>
			)}
		</div>
	);
};

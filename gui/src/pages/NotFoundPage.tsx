import { Link } from "react-router-dom";

export const NotFoundPage = () => {
	return (
		<div style={{ textAlign: "center", padding: "50px" }}>
			<h1 style={{ fontSize: "3rem" }}>404 - Siden blev ikke fundet</h1>
			<p style={{ marginTop: "20px" }}>
				Beklager, vi kunne ikke finde den side, du ledte efter.
			</p>
			<Link
				to="/"
				style={{
					marginTop: "30px",
					display: "inline-block",
					textDecoration: "none",
					color: "#007BFF",
				}}
			>
				← Tilbage til forsiden
			</Link>
		</div>
	);
};

import type React from "react";

type ContentWindowProps = {
	title: string;
	children: React.ReactNode;
};

export const ContentWindow: React.FC<ContentWindowProps> = ({
	title,
	children,
}) => {
	return (
		<div
			style={{
				border: "1px solid #ccc",
				borderRadius: "12px",
				padding: "20px",
				marginBottom: "20px",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
			}}
		>
			<h2
				style={{
					marginBottom: "10px",
					fontSize: "1.5rem",
					textAlign: "center",
				}}
			>
				{title}
			</h2>
			<div style={{ fontSize: "1rem", color: "#333" }}>{children}</div>
		</div>
	);
};

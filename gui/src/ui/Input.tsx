import type { ChangeEvent } from "react";

interface InputProps {
	id?: string;
	name?: string;
	type?: "text" | "number" | "email" | "password";
	value: string | number;
	placeholder?: string;
	onChange: (value: any) => void;
}

export const Input = ({
	id,
	name,
	type = "text",
	value,
	placeholder,
	onChange,
}: InputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (type === "number") {
			onChange(Number(e.target.value));
		} else {
			onChange(e.target.value);
		}
	};

	return (
		<input
			id={id}
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={handleChange}
			style={{
				width: "100%",
				padding: "8px 12px",
				height: "45px",
				fontSize: "16px",
				borderRadius: "8px",
				border: "1px solid #ccc",
				boxSizing: "border-box",
				appearance: "textfield", // <-- NYT: Fjerner spin buttons
				MozAppearance: "textfield", // Firefox fix
				WebkitAppearance: "none", // Chrome/Safari fix
			}}
		/>
	);
};

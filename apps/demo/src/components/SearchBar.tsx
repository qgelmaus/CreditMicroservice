// src/ui/SearchBar.tsx
import { useState } from "react";
import { theme } from "../ui/theme";

type SearchBarProps = {
	placeholder?: string;
	onSearch: (searchTerm: string) => void;
};

export function SearchBar({
	placeholder = "Søg...",
	onSearch,
}: SearchBarProps) {
	const [value, setValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		onSearch(newValue.trim()); // Live updater søgning
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: theme.spacing.sm,
				marginBottom: theme.spacing.lg,
			}}
		>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				style={{
					flexGrow: 1,
					padding: theme.spacing.sm,
					borderRadius: theme.borderRadius.small,
					border: `1px solid ${theme.colors.muted}`,
					fontFamily: theme.fonts.body,
					fontSize: "1rem",
				}}
			/>
		</div>
	);
}

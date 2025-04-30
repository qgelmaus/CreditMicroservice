import type React from "react";

type CheckBoxOption = {
	label: string;
	value: string;
	checked: boolean;
};

type CheckBoxBarProps = {
	options: CheckBoxOption[];
	onChange: (value: string, checked: boolean) => void;
};

export const CheckBoxBar: React.FC<CheckBoxBarProps> = ({
	options,
	onChange,
}) => {
	return (
		<div
			style={{
				display: "flex",
				gap: "1.5rem",
				flexWrap: "wrap",
				marginTop: "1rem",
			}}
		>
			{options.map((option) => (
				<label
					key={option.value}
					style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
				>
					<input
						type="checkbox"
						checked={option.checked}
						onChange={(e) => onChange(option.value, e.target.checked)}
					/>
					{option.label}
				</label>
			))}
		</div>
	);
};

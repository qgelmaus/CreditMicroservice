import type React from "react";

type Field =
	| { name: string; label: string; type: "text" | "number" | "textarea" }
	| {
			name: string;
			label: string;
			type: "select";
			options: { label: string; value: string }[];
	  };

type DynamicFormProps = {
	fields: Field[];
	formData: Record<string, any>;
	onChange: (fieldName: string, value: any) => void;
};

export const DynamicForm: React.FC<DynamicFormProps> = ({
	fields,
	formData,
	onChange,
}) => {
	return (
		<form>
			{fields.map((field) => (
				<div key={field.name} style={{ marginBottom: "1rem" }}>
					<label
						htmlFor={field.name}
						style={{ display: "block", marginBottom: "0.5rem" }}
					>
						{field.label}
					</label>

					{field.type === "textarea" && (
						<textarea
							id={field.name}
							name={field.name}
							value={formData[field.name] || ""}
							onChange={(e) => onChange(field.name, e.target.value)}
							style={{ width: "100%", minHeight: "100px" }}
						/>
					)}

					{(field.type === "text" || field.type === "number") && (
						<input
							id={field.name}
							name={field.name}
							type={field.type}
							value={formData[field.name] || ""}
							onChange={(e) => onChange(field.name, e.target.value)}
							style={{ width: "100%" }}
						/>
					)}

					{field.type === "select" && (
						<select
							id={field.name}
							name={field.name}
							value={formData[field.name] || ""}
							onChange={(e) => onChange(field.name, e.target.value)}
							style={{ width: "100%" }}
						>
							<option value="">-- Vælg --</option>
							{field.options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					)}
				</div>
			))}
		</form>
	);
};

import type { DynamicFormProps } from "../types/Component.types";

export const DynamicForm: React.FC<DynamicFormProps> = ({
	fields,
	formData,
	onChange,
	fieldStyles = {}, // <-- tilføjet default
}) => {
	return (
		<form>
			{fields.map((field) => {
				const commonStyle: React.CSSProperties = {
					width: "100%",
					...fieldStyles[field.name], // <-- merge dine custom styles ind
				};

				return (
					<div key={field.name} style={{ marginBottom: "1rem" }}>
						<label
							htmlFor={field.name}
							style={{ display: "block", marginBottom: "0.5rem" }}
						>
							{field.label}
						</label>

						{(field.type === "text" || field.type === "number") && (
							<input
								id={field.name}
								name={field.name}
								type={field.type}
								value={formData[field.name] || ""}
								onChange={(e) => onChange(field.name, e.target.value)}
								style={commonStyle}
							/>
						)}

						{field.type === "textarea" && (
							<textarea
								id={field.name}
								name={field.name}
								value={formData[field.name] || ""}
								onChange={(e) => onChange(field.name, e.target.value)}
								style={{ ...commonStyle, minHeight: "100px" }}
							/>
						)}

						{field.type === "select" && (
							<select
								id={field.name}
								name={field.name}
								value={formData[field.name] ?? ""}
								onChange={(e) => {
									const selectedValue = e.target.value;
									const option = field.options?.find(
										(o) => o.value.toString() === selectedValue,
									);
									if (option) {
										onChange(field.name, option.value);
									}
								}}
								style={commonStyle}
							>
								<option value="">-- Vælg --</option>
								{field.options?.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						)}

						{field.type === "custom" && field.component && (
							<field.component
								id={field.name}
								name={field.name}
								value={formData[field.name] || ""}
								onChange={(value: any) => onChange(field.name, value)}
							/>
						)}
					</div>
				);
			})}
		</form>
	);
};

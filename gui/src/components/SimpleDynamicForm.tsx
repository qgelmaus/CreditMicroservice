type InputField = {
	name: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
};

type ButtonField = {
	id: string;
	text: string;
	onClick: () => void;
};

type SimpleDynamicFormProps = {
	inputs: InputField[];
	buttons?: ButtonField[];
};

export const SimpleDynamicForm: React.FC<SimpleDynamicFormProps> = ({
	inputs,
	buttons,
}) => {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
		>
			{inputs.map((input) => (
				<label key={input.name}>
					{input.label}
					<input
						type="text"
						value={input.value}
						onChange={(e) => input.onChange(e.target.value)}
						style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
					/>
				</label>
			))}
			{buttons?.map((button) => (
				<button
					key={button.id}
					type="button"
					onClick={button.onClick}
					style={{ padding: "0.5rem" }}
				>
					{button.text}
				</button>
			))}
		</form>
	);
};

import { Input } from "./Input";

interface TextInputProps {
	id?: string;
	name?: string;
	value: string;
	placeholder?: string;
	onChange: (value: string) => void;
}

export const TextInput = ({
	id,
	name,
	value,
	placeholder,
	onChange,
}: TextInputProps) => {
	return (
		<Input
			id={id}
			name={name}
			type="text"
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

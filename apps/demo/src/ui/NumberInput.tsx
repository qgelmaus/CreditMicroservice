import { Input } from "./Input";

interface NumberInputProps {
  id?: string;
  name?: string;
  value: number;
  placeholder?: string;
  onChange: (value: number) => void;
}

export const NumberInput = ({
  id,
  name,
  value,
  placeholder,
  onChange,
}: NumberInputProps) => {
  return (
    <Input
      id={id}
      name={name}
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

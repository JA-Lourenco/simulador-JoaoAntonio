import { Input, Label } from "./styled";

interface InputCompProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  label: string;
  placeholder?: string;
  min?: number;
  onChange: (value: string) => void;
}

export const InputComp = ({
  type,
  label,
  placeholder,
  min,
  onChange,
}: InputCompProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        min={min}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};

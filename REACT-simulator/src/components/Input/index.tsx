import { Input, Label } from "./styled";

interface InputCompProps {
  label: string;
  placeholder?: string;
}

export const InputComp = ({ label, placeholder }: InputCompProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </>
  );
};

import { Input } from "./styled";

interface InputCompProps {
  placeholder?: string;
}

export const InputComp = ({ placeholder }: InputCompProps) => {
  return <Input placeholder={placeholder} />;
};

import { Label, Select } from "./styled";

interface SelectCompProps {
  label: string;
  defaultOption?: string;
}

export const SelectComp = ({ label, defaultOption }: SelectCompProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Select>
        <option selected>
          {defaultOption ? defaultOption : "Selecione uma opção"}
        </option>
        <option>Teste 1</option>
        <option>Teste 2</option>
        <option>Teste 3</option>
      </Select>
    </>
  );
};

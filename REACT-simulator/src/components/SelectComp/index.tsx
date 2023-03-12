import { Select } from "./styled";

interface SelectCompProps {
  defaultOption?: string;
}

export const SelectComp = ({ defaultOption }: SelectCompProps) => {
  return (
    <Select>
      <option selected>
        {defaultOption ? defaultOption : "Selecione uma opção"}
      </option>
      <option>Teste 1</option>
      <option>Teste 2</option>
      <option>Teste 3</option>
    </Select>
  );
};

import { Label, Select } from "./styled";

export interface OptionsProps {
  id: number;
  name: string;
}
interface SelectCompProps {
  label: string;
  defaultOption?: string;
  options: OptionsProps[];
  onChange: (value: string) => void;
}

export const SelectComp = ({
  label,
  defaultOption,
  options,
  onChange,
}: SelectCompProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Select onChange={(event) => onChange(event.target.value)}>
        <option selected disabled>
          {defaultOption ? defaultOption : "Selecione uma opção"}
        </option>
        {options?.map((opt) => {
          return (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          );
        })}
      </Select>
    </>
  );
};

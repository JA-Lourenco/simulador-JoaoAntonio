import { Label, Select } from "./styled";

export interface OptionsProps {
  id: number;
  name: string;
}
interface SelectCompProps {
  label: string;
  defaultOption?: string;
  options: OptionsProps[];
}

export const SelectComp = ({
  label,
  defaultOption,
  options,
}: SelectCompProps) => {
  console.log("options", options);

  return (
    <>
      <Label>{label}</Label>
      <Select>
        <option defaultValue="">
          {defaultOption ? defaultOption : "Selecione uma opção"}
        </option>
        {options?.map((opt) => {
          console.log("opt", opt);
          return (
            <option key={opt.id} id={opt.id.toString()}>
              {opt.name}
            </option>
          );
        })}
      </Select>
    </>
  );
};

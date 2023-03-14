import { Button } from "./styled";

interface ButtomCompProps {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  onClick: () => void;
}

export const ButtonComp = ({ type, title, onClick }: ButtomCompProps) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
};

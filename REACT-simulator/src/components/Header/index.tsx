import { Container, Image, Title } from "./styled";

import logoEngecred from "../../assets/logo-sicoob-engecred.svg";

interface HeaderProps {
  imgSrc?: string;
  title?: string;
}

export const Header = ({ imgSrc, title }: HeaderProps) => {
  return (
    <Container>
      <Image src={imgSrc ? imgSrc : logoEngecred} />
      <Title>{title ? title : "Simulador de Taxas"}</Title>
    </Container>
  );
};

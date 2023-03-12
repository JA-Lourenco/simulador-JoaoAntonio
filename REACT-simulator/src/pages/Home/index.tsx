import { Container, InputSection } from "./styled";

import { Header } from "../../components/Header";
import { SelectComp } from "../../components/SelectComp";
import { InputComp } from "../../components/Input";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <InputSection>
          <SelectComp />
          <SelectComp />
          <SelectComp />
          <InputComp placeholder="Valor da Renda Mínima" />
        </InputSection>
      </Container>
    </>
  );
};

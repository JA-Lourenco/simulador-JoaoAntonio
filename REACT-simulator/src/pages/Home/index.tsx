import { Container, InputSection, ResultSection } from "./styled";

import { Header } from "../../components/Header";
import { SelectComp } from "../../components/SelectComp";
import { InputComp } from "../../components/Input";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <InputSection>
          <SelectComp label="Tipo Pessoa" />
          <SelectComp label="Modalidade" />
          <SelectComp label="Produto" />
          <InputComp label="Renda" placeholder="Valor da Renda Mínima" />
        </InputSection>

        <ResultSection>
          <Card
            title="Resultado"
            firstProperty="Segmento"
            secondProperty="Taxa"
            firstResult="PF5"
            secondResult="0,5%"
          />
        </ResultSection>
      </Container>
    </>
  );
};

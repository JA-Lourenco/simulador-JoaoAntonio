import { useEffect, useState } from "react";

import { Container, InputSection, ResultSection } from "./styled";

import { Header } from "../../components/Header";
import { SelectComp, OptionsProps } from "../../components/SelectComp";
import { InputComp } from "../../components/Input";
import { Card } from "../../components/Card";

import { api } from "../../services/api";

interface PersonTypesProps {
  idTipoPessoa: number;
  tipo: string;
}
interface ModalitiesProps {
  idModalidade: number;
  categoria: string;
}
interface DataProps {
  personTypes: PersonTypesProps[];
  modalities: ModalitiesProps[];
}

export const Home = () => {
  const [personTypes, setpersonTypes] = useState<OptionsProps[]>([]);
  const [modalities, setModalities] = useState<OptionsProps[]>([]);
  const [products, setProducts] = useState<OptionsProps[]>([]);

  const getAllData = async () => {
    try {
      const {
        data: { personTypes, modalities },
      } = await api.get<DataProps>("/");

      const tempPersonTypes = personTypes.map(({ idTipoPessoa, tipo }) => ({
        id: idTipoPessoa,
        name: tipo,
      }));

      const tempModalities = modalities.map(({ idModalidade, categoria }) => ({
        id: idModalidade,
        name: categoria,
      }));

      setpersonTypes(tempPersonTypes);
      setModalities(tempModalities);
    } catch (error) {
      console.log("test error", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <InputSection>
          <SelectComp label="Tipo Pessoa" options={personTypes} />
          <SelectComp label="Modalidade" options={modalities} />
          <SelectComp label="Produto" options={products} />
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

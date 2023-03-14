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

interface ProductsProps {
  idProduto: number;
  nome: string;
}

interface GetInitialDataProps {
  personTypes: PersonTypesProps[];
  modalities: ModalitiesProps[];
}

export const Home = () => {
  const [personTypes, setPersonTypes] = useState<OptionsProps[]>([]);
  const [modalities, setModalities] = useState<OptionsProps[]>([]);
  const [products, setProducts] = useState<OptionsProps[]>([]);

  const getInitialData = async () => {
    try {
      const {
        data: { personTypes, modalities },
      } = await api.get<GetInitialDataProps>("/");

      const tempPersonTypes = personTypes.map(({ idTipoPessoa, tipo }) => ({
        id: idTipoPessoa,
        name: tipo,
      }));

      const tempModalities = modalities.map(({ idModalidade, categoria }) => ({
        id: idModalidade,
        name: categoria,
      }));

      setPersonTypes(tempPersonTypes);
      setModalities(tempModalities);
    } catch (error) {
      console.log("getInitialData error: ", error);
    }
  };

  const handleGetProducts = async (idTipoPessoa: string) => {
    try {
      const { data } = await api.get<ProductsProps[]>(
        `/products?idTipoPessoa=${idTipoPessoa}`
      );

      const tempProducts = data.map(({ idProduto, nome }) => ({
        id: idProduto,
        name: nome,
      }));

      setProducts(tempProducts);
    } catch (error) {
      console.log("handleGetProducts error: ", error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <InputSection>
          <SelectComp
            label="Tipo Pessoa"
            options={personTypes}
            onChange={(value) => handleGetProducts(value)}
          />
          <SelectComp
            label="Modalidade"
            options={modalities}
            onChange={() => {}}
          />
          <SelectComp label="Produto" options={products} onChange={() => {}} />

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

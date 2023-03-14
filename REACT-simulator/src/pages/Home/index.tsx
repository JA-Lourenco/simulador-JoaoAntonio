import { useEffect, useState } from "react";

import { Container, InputSection, ResultSection } from "./styled";

import { Header } from "../../components/Header";
import { SelectComp, OptionsProps } from "../../components/SelectComp";
import { InputComp } from "../../components/InputComp";
import { ButtonComp } from "../../components/ButtonComp";
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

interface TaxRatioProps {
  idPersonType: string;
  idModality: string;
  idProduct: string;
  amount: string;
}

interface GetProductsProps {
  idProduto: number;
  nome: string;
}

interface GetInitialDataProps {
  personTypes: PersonTypesProps[];
  modalities: ModalitiesProps[];
}

interface GetResultProps {
  nome: string;
  taxa: number;
}

export const Home = () => {
  const [personTypes, setPersonTypes] = useState<OptionsProps[]>([]);
  const [modalities, setModalities] = useState<OptionsProps[]>([]);
  const [products, setProducts] = useState<OptionsProps[]>([]);
  const [taxRatio, setTaxRatio] = useState<TaxRatioProps>({} as TaxRatioProps);
  const [result, setResult] = useState<GetResultProps>();

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
      const { data } = await api.get<GetProductsProps[]>(
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

  const handleGetTaxRatio = async ({
    idPersonType,
    idModality,
    idProduct,
    amount,
  }: TaxRatioProps) => {
    try {
      if (amount === undefined) amount = "0";

      if (!idPersonType || !idModality || !idProduct) {
        alert("Atenção! Favor inserir os dados antes de realizar a simulação.");
      } else {
        const { data } = await api.get<GetResultProps>(
          `/tax-ratio?idTipoPessoa=${idPersonType}&idModalidade=${idModality}&idProduto=${idProduct}&rendaMinima=${amount}`
        );

        setResult(data);
      }
    } catch (error) {
      console.log("handleGetTaxioRatio error: ", error);
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
            onChange={(value) => {
              handleGetProducts(value);
              setTaxRatio((prev) => ({ ...prev, idPersonType: value }));
            }}
          />
          <SelectComp
            label="Modalidade"
            options={modalities}
            onChange={(value) =>
              setTaxRatio((prev) => ({ ...prev, idModality: value }))
            }
          />
          <SelectComp
            label="Produto"
            options={products}
            onChange={(value) =>
              setTaxRatio((prev) => ({ ...prev, idProduct: value }))
            }
          />

          <InputComp
            type="number"
            label="Renda"
            placeholder="Valor da Renda Mínima"
            min={0}
            onChange={(value) =>
              setTaxRatio((prev) => ({ ...prev, amount: value }))
            }
          />
        </InputSection>

        <ResultSection>
          <Card
            title="Resultado"
            firstProperty="Segmento"
            secondProperty="Taxa"
            firstResult={result?.nome}
            secondResult={
              result?.taxa === null ? "Não Disponível" : result?.taxa
            }
          />
        </ResultSection>
      </Container>

      <Container>
        <ButtonComp
          type="button"
          title="SIMULAR"
          onClick={() =>
            handleGetTaxRatio({
              idPersonType: taxRatio.idPersonType,
              idModality: taxRatio.idModality,
              idProduct: taxRatio.idProduct,
              amount: taxRatio.amount,
            })
          }
        />
      </Container>
    </>
  );
};

import { Request, Response } from "express";
import { querySQL } from "../utils/querySQL";

export const getTaxRatio = async (req: Request, res: Response) => {
  try {
    const { idTipoPessoa, idModalidade, idProduto, rendaMinima } = req.query;

    const personType = await querySQL({
      attributes: "tp.tipo",
      entity: "TipoPessoa tp",
      condition: `WHERE tp.idTipoPessoa = ${idTipoPessoa}`,
    });

    const joinAmount = `
      JOIN RendaMinima rm ON rm.idRendaMinima = s.idRendaMinima
    `;

    const condAmount = `
      WHERE s.nome LIKE '${personType[0].tipo}%'
      ORDER BY rm.valorRendaMinima ASC
    `;

    const resultAmount = await querySQL({
      attributes: "s.idSegmento, s.nome, rm.valorRendaMinima ",
      entity: "Segmento s",
      extra: joinAmount,
      condition: condAmount,
    });

    let partialResult;

    for (let i = 0; i < resultAmount.length; i++) {
      const minValue = resultAmount[i]?.valorRendaMinima;
      const maxValue = resultAmount[i + 1]?.valorRendaMinima;

      if (rendaMinima! >= minValue && rendaMinima! < maxValue) {
        partialResult = resultAmount[i];
        break;
      }

      if (!maxValue) partialResult = resultAmount[i];
    }

    const taxJoin = `
      LEFT JOIN Segmento s ON s.idSegmento = rt.idSegmento
      LEFT JOIN TipoPessoa tp ON tp.idTipoPessoa = rt.idTipoPessoa
      LEFT JOIN Modalidade m ON m.idModalidade = rt.idModalidade
      LEFT JOIN Produto p ON p.idProduto = rt.idProduto
      LEFT JOIN RendaMinima rm ON rm.idRendaMinima = s.idRendaMinima
    `;

    const taxWhere = `
      WHERE tp.idTipoPessoa = ${idTipoPessoa}
      AND m.idModalidade = ${idModalidade}
      AND p.idProduto = ${idProduto}
      AND s.idSegmento = ${partialResult.idSegmento};
    `;

    const taxRatioResult = await querySQL({
      attributes: "s.nome, rt.taxa",
      entity: "RelacaoTaxas rt",
      extra: taxJoin,
      condition: taxWhere,
    });

    res.status(200).json(taxRatioResult[0]);
  } catch (error) {
    console.log("getTaxRatio error: ", error);
    return res.status(500).send(error);
  }
};

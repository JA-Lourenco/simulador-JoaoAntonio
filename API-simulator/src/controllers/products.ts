import { Request, Response } from "express";
import { querySQL } from "../utils/querySQL";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { idTipoPessoa } = req.query;

    const join = `
      LEFT JOIN TipoPessoa tp ON tp.idTipoPessoa = rt.idTipoPessoa
      LEFT JOIN Produto p ON p.idProduto = rt.idProduto
    `;

    const result = await querySQL({
      attributes: "DISTINCT p.nome",
      entity: "RelacaoTaxas rt",
      extra: join,
      condition: `WHERE tp.idTipoPessoa = ${idTipoPessoa}`,
      log: true,
    });

    console.log("result", result);

    res.status(200).json(result);
  } catch (error) {
    console.log("getHelloWorld error", error);
    return res.status(500).send(error);
  }
};

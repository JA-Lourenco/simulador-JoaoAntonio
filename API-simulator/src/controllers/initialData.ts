import { Request, Response } from "express";
import { querySQL } from "../utils/querySQL";

export const getInitialData = async (req: Request, res: Response) => {
  try {
    const personTypes = await querySQL({
      entity: "TipoPessoa",
    });

    const modalities = await querySQL({
      entity: "Modalidade",
    });

    const result = {
      personTypes,
      modalities,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log("getAllData error", error);
    return res.status(500).send(error);
  }
};

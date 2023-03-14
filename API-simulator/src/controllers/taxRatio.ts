import { Request, Response } from "express";
import { querySQL } from "../utils/querySQL";

export const getTaxRatio = async (req: Request, res: Response) => {
  try {
    res.send("TaxRatio!");
  } catch (error) {
    console.log("getTaxRatio error: ", error);
    return res.status(500).send(error);
  }
};

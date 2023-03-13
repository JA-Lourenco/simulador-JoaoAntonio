import express from "express";

import { getTaxRatio } from "../../controllers/taxRatio";

const routerTaxRatio = express.Router();

routerTaxRatio.get("/", getTaxRatio);

export { routerTaxRatio };

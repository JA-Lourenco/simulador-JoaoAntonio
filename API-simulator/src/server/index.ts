import express from "express";

import { routerInitialData } from "./routes/initialData";
import { routerProducts } from "./routes/products";
import { routerTaxRatio } from "./routes/taxRatio";

const routes = express.Router();

routes.use("/", routerInitialData);
routes.use("/products", routerProducts);
routes.use("/tax-ratio", routerTaxRatio);

export { routes };

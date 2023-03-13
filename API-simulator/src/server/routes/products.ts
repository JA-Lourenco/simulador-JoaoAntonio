import express from "express";

import { getProducts } from "../../controllers/products";

const routerProducts = express.Router();

routerProducts.get("/", getProducts);

export { routerProducts };

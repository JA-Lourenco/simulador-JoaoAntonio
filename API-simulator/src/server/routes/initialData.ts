import express from "express";

import { getInitialData } from "../../controllers/initialData";

const routerInitialData = express.Router();

routerInitialData.get("/", getInitialData);

export { routerInitialData };

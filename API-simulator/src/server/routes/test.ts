import express from "express";

import { getTest } from "../../controllers/test";

const routerTest = express.Router();

routerTest.get("/", getTest);

export { routerTest };

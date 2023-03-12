import express from "express";

import { getHelloWorld } from "../../controllers/helloWorld";

const routerHelloWorld = express.Router();

routerHelloWorld.get("/", getHelloWorld);

export { routerHelloWorld };

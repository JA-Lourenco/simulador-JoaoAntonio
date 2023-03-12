import express from "express";

import { routerHelloWorld } from "./routes/helloWorld";
import { routerTest } from "./routes/test";

const routes = express.Router();

routes.use("/hello", routerHelloWorld);
routes.use("/test", routerTest);

export { routes };

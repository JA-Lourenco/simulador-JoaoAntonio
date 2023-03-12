import express from "express";

import { routes } from "./server";
import { db } from "./database";

const app = express();
const port = 3000;

app.use(routes);
db();

app.listen(port, () => console.log(`-> Running at http://localhost:${port}`));

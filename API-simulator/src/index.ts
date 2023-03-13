import express from "express";

import { routes } from "./server";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(routes);

app.listen(port, () => console.log(`-> Running at http://localhost:${port}`));

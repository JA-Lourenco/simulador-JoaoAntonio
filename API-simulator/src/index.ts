import express from "express";

import { routes } from "./server";
import { querySQL } from "./utils/querySQL";

const app = express();
const port = 3000;

app.use(routes);

querySQL({
  entity: "TipoPessoa",
  log: true,
});

app.listen(port, () => console.log(`-> Running at http://localhost:${port}`));

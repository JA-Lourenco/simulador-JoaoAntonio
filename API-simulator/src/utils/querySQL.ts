import mssql from "mssql";
import { databaseConnect } from "../database";

interface QuerySQLProps {
  attributes?: string;
  entity: string;
  condition?: string;
  extra?: string;
  log?: boolean;
}

const querySQL = async ({
  attributes,
  entity,
  condition,
  extra,
  log,
}: QuerySQLProps) => {
  try {
    await databaseConnect();

    const sql = `
      SELECT
        ${attributes ? attributes : "*"}
      FROM ${entity}
      ${extra ? extra : ""}
      ${condition ? `WHERE ${condition}` : ""}
    `;

    if (log) console.log("querySQL log: ", sql);

    const result = await mssql.query(sql);
    console.log("Result: ", result);
  } catch (error) {
    console.log("querySQL Error: ", error);
    throw error;
  }
};

export { querySQL };

import mssql from "mssql";

const sqlConfig = {
  user: "sa",
  password: "uN1p79*J^8YB",
  database: "simulador",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const db = async () => {
  try {
    await mssql.connect(sqlConfig);
    const result = await mssql.query(
      "SELECT s.nome, rm.valorRendaMinima FROM Segmento s LEFT JOIN RendaMinima rm ON rm.idRendaMinima = s.idRendaMinima"
    );
    console.log("Result: ", result);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export { db };

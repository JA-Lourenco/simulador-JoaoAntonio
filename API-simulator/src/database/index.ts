import mssql from "mssql";
import * as dotenv from "dotenv";

dotenv.config();

const sqlConfig = {
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
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

const databaseConnect = async () => {
  try {
    await mssql.connect(sqlConfig);
  } catch (error) {
    console.log("databaseConnect error: ", error);
    throw error;
  }
};

export { databaseConnect };

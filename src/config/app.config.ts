import dotenv from "dotenv";

// Enviroments configuration
const envFile = `.${process.env.NODE_ENV?.trim() || "development"}.env`;
dotenv.config({ path: envFile });

export const configuration = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_PASS: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
};

import dotenv from "dotenv";
import path from "path";
import { __dirname } from "./const.js";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const load = process.env;

const getEnvVariable = (key) => {
  const value = load[key];
  if (!value) {
    throw new Error(`Missing Environment Variable: ${key}`);
  }
  return value;
};

const env = {
  PORT: parseInt(getEnvVariable("PORT")),
};

export default env;

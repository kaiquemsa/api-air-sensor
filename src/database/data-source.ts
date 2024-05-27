import "reflect-metadata";
import { DataSource } from "typeorm";

import Predictions from "../entities/Predictions";
import Sensor from "../entities/Sensor";
import Users from "../entities/Users";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  synchronize: false,
  entities: [Predictions, Sensor, Users],
});
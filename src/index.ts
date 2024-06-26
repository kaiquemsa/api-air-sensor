import "dotenv/config";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(routes);

AppDataSource.initialize()
  .then(() => {
    app.listen(8000, () => {
      console.log("listening on port 8000");
    });
  })
  .catch((error) => console.log(error));

export default app;
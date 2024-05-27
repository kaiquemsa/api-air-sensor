import { Router } from "express";

import GetAllPredictionController from "./controllers/GetAllPredictionController";
import GetAllSensorController from "./controllers/GetAllSensorController";

import CreateUserController from "./controllers/CreateUserController";
import AuthLoginUserController from "./controllers/AuthloginController";

const routes = Router();

routes.get("/predictions", new GetAllPredictionController().handle);

routes.get("/sensor", new GetAllSensorController().handle);

routes.post("/user", new CreateUserController().handle);

routes.post("/authUser", new AuthLoginUserController().handle);

export default routes;
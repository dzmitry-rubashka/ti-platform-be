import express from "express";
import * as TechnologyController from "../controllers/technology/technology.controller";

const technologiesRouter = express.Router();
technologiesRouter.get("/technologies", TechnologyController.getAllTechnologiesContoller);
technologiesRouter.post("/technologies", TechnologyController.createTechnologyController);

export default technologiesRouter;

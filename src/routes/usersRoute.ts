import express from "express";
import * as UserController from "../controllers/user/user.controller";

const usersRouter = express.Router();
usersRouter.get("/users", UserController.getAllUsersController);

export default usersRouter;
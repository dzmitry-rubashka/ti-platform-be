import express from "express";
import * as InterviewController from "../controllers/interview/interview.controller";

const interviewsRouter = express.Router();
interviewsRouter.post("/interviews", InterviewController.createInterviewController);

export default interviewsRouter;

import express from "express";
const router = express.Router();
import interviewsRouter from "./interviewsRoute";
import technologiesRouter from "./technologiesRoute";
import usersRouter from "./usersRoute";

router.use(
    /**
     *  @swagger
     *  /interviews:
     *     post:
     *       tags:
     *         - Interviews
     *       summary: Add One Interview
     *       operationId: addOneInterview
     *       parameters:
     *         - in: body
     *           name: interviews
     *           description: interviews
     *           required: true
     *           schema:
     *             $ref: "#/definitions/Interview"
     *       responses:
     *         200:
     *           description: Successful response
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Interview"
     *         default:
     *           description: Error
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Error"
     */
    interviewsRouter);
router.use(
    /**
     *  @swagger
     *  /technologies:
     *     get:
     *       summary: Get All Technologies
     *       tags:
     *         - Technologies
     *       operationId: getAllTechnologies
     *       responses:
     *         200:
     *           description: Successful response
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Technologies"
     *         default:
     *           description: Error
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Error"
     *     post:
     *       tags:
     *         - Technologies
     *       summary: Add One Technology
     *       operationId: addOneTechnology
     *       parameters:
     *         - in: body
     *           name: technology
     *           description: technology
     *           required: true
     *           schema:
     *             $ref: "#/definitions/Technology"
     *       responses:
     *         200:
     *           description: Successful response
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Technology"
     *         default:
     *           description: Error
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Error"
     */
    technologiesRouter);
router.use(
    /**
     *  @swagger
     * /users:
     *     get:
     *       summary: Get All Users
     *       tags:
     *         - Users
     *       operationId: getAllUsers
     *       responses:
     *         200:
     *           description: Successful response
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Users"
     *         default:
     *           description: Error
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: "#/definitions/Error"
     */
    usersRouter);
export default router;

/* istanbul ignore file */
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";
import { config } from "dotenv";
import { sequelize } from "./models";
import app from "./index";
import indexRouter from "./routes/index";

config();

const port = process.env.PORT || 3001;
const swaggerDefinition = {
  info: {
    title: "Internal project - TI Platform",
    version: "0.0.1",
  }
};
const options = {
  swaggerDefinition,
  apis: ["./**/*.yaml"],
};
const swaggerSpec = swaggerJSDoc(options);

app.use(cors());
app.use(express.json());
app.use("/", indexRouter);
app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec),
);
app.listen(port, async () => {
  console.log(`Running on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
export default { app };

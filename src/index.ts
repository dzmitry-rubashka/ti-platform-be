import express from "express";
const { db } = require("./models");

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello ti-platform");
});

export default app;

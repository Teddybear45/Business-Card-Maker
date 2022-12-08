const express = require("express");
const usersRouter = require("./controllers/users");

const app = express();

app.use("/api/users", usersRouter);

module.exports = app;

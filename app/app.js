require("dotenv").config("../.env");
const express = require("express");

const { notFoundHandler, errorHandler } = require("./error.js");

const app = express();

app.use(require("./middleware.js"));
app.use(require("./routes.js"));

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;

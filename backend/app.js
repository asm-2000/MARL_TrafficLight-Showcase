const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const suggestionRoute = require("./routes/suggestions");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://0.0.0.0/MARL").then(() => {
  console.log("Database Connected");
});

app.use(morgan("dev"));
app.use(cors());

app.use("/suggestion", suggestionRoute);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
  const error = new Error("Cannot find the requested page");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status;
  res.status(status).json({
    message: error.message,
  });
});

module.exports = app;

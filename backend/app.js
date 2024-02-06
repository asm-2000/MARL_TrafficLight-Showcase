const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const cors= require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://ashimbaral50:ashim50@marl-showcase.mpk9jc8.mongodb.net/"
  )
  .then(() => {
    console.log("Database Connected");
  });

app.use(morgan("dev"));
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

module.exports = app;

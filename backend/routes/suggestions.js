const express = require("express");
const router = express.Router();
const Suggestions = require("../models/Suggestions");
const mongoose = require("mongoose");

router.post("/", (req, res, next) => {
  res.status(201).json(req.body);
  // const suggestionData = new Suggestions({
  //   _id: new mongoose.Types.ObjectId(),
  //   s_name: req.body.name,
  //   s_email: req.body.email,
  //   suggesstion: req.body.suggestion,
  // });
  // suggestionData.save().then(()=>{
  //   res.status(201).json("sucess");
  // }).catch(()=>{
  //   res.status(500).json("error");
  // })
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Suggestions = require("../models/Suggestions");
const { default: mongoose } = require("mongoose");

router.post("/", (req, res, next) => {
  // const suggestionData = {
  //     name: req.body.name,
  //     email: req.body.name,
  //     suggesstion: req.body.suggestion
  // }
  const suggestionData = new Suggestions({
    _id: new mongoose.Schema.ObjectId(),
    s_name: req.body.name,
    s_email: req.body.name,
    suggesstion: req.body.suggestion,
  });
  suggestionData.save().then(()=>{
    res.status(201)
  }).catch(()=>{
    res.status(500);
  })
});

module.exports = router;

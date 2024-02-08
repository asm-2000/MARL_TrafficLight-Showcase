const express = require("express");
const router = express.Router();
const Suggestions = require("../models/Suggestions");
const mongoose = require("mongoose");

router.post("/postData", async (req, res) => {
  try
  {
    console.log("ashim");
    console.log(req.body);
    const suggestionData = new Suggestions({
      _id: new mongoose.Types.ObjectId(),
      s_name: req.body.name,
      s_email: req.body.email,
      suggestion: req.body.suggestion,
    });
    suggestionData.save().then(()=>{
      res.status(201).json();
    })
  }
  catch
  {
    res.status(500).json({msg: "Server error!"});
    console.log(req.body);
  }

});

module.exports = router;

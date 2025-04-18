const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

router.post("/", async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ message: "Error creating food donation" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Drink = require("../models/drinks");

// Dohvatanje svih pića
router.get("/", async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.json(drinks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dohvatanje jednog pića po ID-u
router.get("/:id", async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    if (!drink) {
      return res.status(404).json({ message: "Drink not found" });
    }
    res.json(drink);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

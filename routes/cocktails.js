// routes/cocktails.js
const express = require("express");
const router = express.Router();
const Cocktail = require("../models/cocktails");

// Dohvatanje svih koktela
router.get("/", async (req, res) => {
  try {
    const cocktails = await Cocktail.find();
    res.json(cocktails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dohvatanje jednog koktela po ID-u
router.get("/:id", async (req, res) => {
  try {
    const cocktail = await Cocktail.findById(req.params.id);
    if (!cocktail) {
      return res.status(404).json({ message: "Cocktail not found" });
    }
    res.json(cocktail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

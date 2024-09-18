const express = require("express");
const router = express.Router();
const Cocktail = require("../models/cocktails");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.verifyToken, async (req, res) => {
  try {
    const cocktails = await Cocktail.find();
    res.json(cocktails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", authMiddleware.verifyToken, async (req, res) => {
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

router.post(
  "/",
  [authMiddleware.verifyToken, authMiddleware.hasRole("general")],
  async (req, res) => {
    const cocktail = new Cocktail({
      name: req.body.name,
      type: req.body.type,
      alcoholic: req.body.alcoholic,
      alcoholContent: req.body.alcoholContent,
      imageUrl: req.body.imageUrl,
      videoUrl: req.body.videoUrl,
      ingredients: req.body.ingredients,
      desc: req.body.desc,
    });

    try {
      const newCocktail = await cocktail.save();
      res.status(201).json(newCocktail);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

router.delete(
  "/:id",
  [authMiddleware.verifyToken, authMiddleware.hasRole("admin")],
  async (req, res) => {
    try {
      const cocktail = await Cocktail.findByIdAndDelete(req.params.id);
      if (!cocktail) {
        return res.status(404).json({ message: "Cocktail not found" });
      }
      res.json({ message: "Cocktail deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

router.patch(
  "/:id",
  [authMiddleware.verifyToken, authMiddleware.hasRole("general")],
  async (req, res) => {
    try {
      const cocktail = await Cocktail.findById(req.params.id);
      if (!cocktail) {
        return res.status(404).json({ message: "Cocktail not found" });
      }

      if (req.body.name) cocktail.name = req.body.name;
      if (req.body.type) cocktail.type = req.body.type;
      if (req.body.alcoholic) cocktail.alcoholic = req.body.alcoholic;
      if (req.body.alcoholContent)
        cocktail.alcoholContent = req.body.alcoholContent;
      if (req.body.imageUrl) cocktail.imageUrl = req.body.imageUrl;
      if (req.body.videoUrl) cocktail.videoUrl = req.body.videoUrl;
      if (req.body.ingredients) cocktail.ingredients = req.body.ingredients;
      if (req.body.desc) cocktail.desc = req.body.desc;

      await cocktail.save();
      res.json(cocktail);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

module.exports = router;

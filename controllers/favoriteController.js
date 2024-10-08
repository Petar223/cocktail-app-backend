const Favorite = require("../models/Favorite");

const addFavorite = async (req, res) => {
  try {
    const favorite = new Favorite({
      userId: req.userId,
      drinks: req.body.drinks || [],
      cocktails: req.body.cocktails || [],
    });

    const newFavorite = await favorite.save();
    res.status(201).json(newFavorite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findOne({ userId: req.userId });
    if (!favorites) {
      return res.status(404).json({ message: "Favorites not found" });
    }
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ userId: req.userId });

    if (req.body.drinkId) {
      favorite.drinks.pull(req.body.drinkId);
    }
    if (req.body.cocktailId) {
      favorite.cocktails.pull(req.body.cocktailId);
    }

    await favorite.save();
    res.json({ message: "Favorite removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite,
};

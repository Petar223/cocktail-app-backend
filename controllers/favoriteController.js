const Favorite = require("../models/favorites");
const Cocktail = require("../models/cocktails");

const addFavorite = async (req, res) => {
  try {
    let favorite = await Favorite.findOne({ userId: req.userId });
    if (!favorite) {
      favorite = new Favorite({ userId: req.userId, cocktails: [] });
    }

  
    const cocktail = await Cocktail.findById(req.body.cocktailId);
    if (!cocktail) {
      return res.status(404).json({ message: "Cocktail not found" });
    }

    const alreadyFavorited = favorite.cocktails.some(
      (favCocktail) => favCocktail._id.toString() === cocktail._id.toString()
    );

    if (alreadyFavorited) {
      return res.status(400).json({ message: "Cocktail already in favorites" });
    }

    favorite.cocktails.push(cocktail);
    const updatedFavorite = await favorite.save();
    res.status(201).json(updatedFavorite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getFavorites = async (req, res) => {
  console.log("User:", req.userId);
  try {
    const favorites = await Favorite.findOne({ userId: req.userId }).populate(
      "cocktails"
    );
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
    if (!favorite) {
      return res.status(404).json({ message: "Favorites not found" });
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

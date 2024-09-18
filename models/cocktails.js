const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  // drinkId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Drink",
  //   required: false,
  // },
  quantity: {
    type: Number,
    required: false,
  },
  unit: {
    type: String,
    required: false,
  },
});

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  alcoholic: {
    type: Boolean,
    required: false,
  },
  alcoholContent: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  videoUrl: {
    type: String,
    required: false,
  },
  ingredients: [ingredientSchema],
  desc: {
    type: String,
    required: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

module.exports = Cocktail;

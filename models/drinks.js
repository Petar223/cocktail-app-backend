const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
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
  imageUrl: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;

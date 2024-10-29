const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // drinks: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Drink",
  //   },
  // ],
  cocktails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cocktail",
    },
  ],
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;

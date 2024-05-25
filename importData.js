require("dotenv").config();
const mongoose = require("mongoose");
const Drink = require("./models/drinks");
const Cocktail = require("./models/cocktails");
const { drinks, cocktails } = require("./data/drinks");

const mongoUser = process.env.MONGO_ROOT_USER;
const mongoPass = process.env.MONGO_ROOT_PASSWORD;
const mongoHost = "mongo-db";
const mongoPort = "27017";
const mongoDB = "cocktailDB";

const MONGODB_URI = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;

mongoose
  .connect(MONGODB_URI, { dbName: mongoDB })
  .then(() => {
    console.log("MongoDB connected");
    importData();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

async function importData() {
  try {
    // Clear previous data
    await Drink.deleteMany({});
    await Cocktail.deleteMany({});

    // Insert new drinks and get their generated IDs
    const insertedDrinks = await Drink.insertMany(drinks);
    const drinkMap = new Map(
      insertedDrinks.map((drink) => [drink.name, drink._id])
    );

    // Update cocktail ingredients to reference these new IDs
    const updatedCocktails = cocktails.map((cocktail) => {
      cocktail.ingredients = cocktail.ingredients.map((ingredient) => {
        return {
          ...ingredient,
          _id: drinkMap.get(
            drinks.find((drink) => drink.id === ingredient.drinkId).name
          ), // Ensure correct mapping based on original drink id
        };
      });
      return cocktail;
    });

    // Insert updated cocktails
    await Cocktail.insertMany(updatedCocktails);

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to import data:", error);
    process.exit(1);
  }
}

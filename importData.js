require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Drink = require("./models/drinks");
const Cocktail = require("./models/cocktails");
const User = require("./models/user");
const Favorite = require("./models/favorites"); // Import Favorites modela
const { drinks, cocktails } = require("./data/drinks");

const mongoUser = process.env.MONGO_ROOT_USER;
const mongoPass = process.env.MONGO_ROOT_PASSWORD;
const mongoHost = "mongo-db";
const mongoPort = "27017";
const mongoDB = "cocktailDB";

const MONGODB_URI = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;
console.log(MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { dbName: mongoDB })
  .then(() => {
    console.log("MongoDB connected");
    importData();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

async function importData() {
  try {
    await Drink.deleteMany({});
    await Cocktail.deleteMany({});
    await User.deleteMany({});
    await Favorite.deleteMany({}); // Brisanje starih favorites dokumenata

    const users = [
      {
        username: "admin",
        password: await bcrypt.hash("admin1234", 12),
        role: "admin",
      },
      {
        username: "generalUser",
        password: await bcrypt.hash("general123", 12),
        role: "general",
      },
      {
        username: "regularUser",
        password: await bcrypt.hash("user1234", 12),
        role: "user",
      },
    ];

    // Dodaj korisnike u bazu i vrati umetnute korisnike
    const insertedUsers = await User.insertMany(users);
    console.log("Users added successfully");

    // Kreiraj favorites dokumente za svakog umetnutog korisnika
    const favoritesData = insertedUsers.map((user) => ({
      userId: user._id,
      cocktails: [],
    }));
    await Favorite.insertMany(favoritesData);
    console.log("Favorites added successfully");

    // Umetanje drinks podataka
    const insertedDrinks = await Drink.insertMany(drinks);
    const drinkMap = new Map(
      insertedDrinks.map((drink) => [drink.name, drink._id])
    );

    // Mapiranje koktela sa odgovarajućim ingredientima
    const updatedCocktails = cocktails.map((cocktail) => {
      cocktail.ingredients = cocktail.ingredients.map((ingredient) => {
        return {
          ...ingredient,
          _id: drinkMap.get(
            drinks.find((drink) => drink.id === ingredient.drinkId).name
          ),
        };
      });
      return cocktail;
    });

    await Cocktail.insertMany(updatedCocktails);

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to import data:", error);
    process.exit(1);
  }
}

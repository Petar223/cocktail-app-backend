require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Drink = require("./models/drinks");
const Cocktail = require("./models/cocktails");
const User = require("./models/user");
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
    
    await Drink.deleteMany({});
    await Cocktail.deleteMany({});
    await User.deleteMany({});

    const users = [
      {
        username: "admin",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
      },
      {
        username: "generalUser",
        password: await bcrypt.hash("general123", 10),
        role: "general",
      },
      {
        username: "regularUser",
        password: await bcrypt.hash("user123", 10),
        role: "user",
      },
    ];

    await User.insertMany(users);
    console.log("Users added successfully");

    
    const insertedDrinks = await Drink.insertMany(drinks);
    const drinkMap = new Map(
      insertedDrinks.map((drink) => [drink.name, drink._id])
    );

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

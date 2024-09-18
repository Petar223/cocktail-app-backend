require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const drinksRouter = require("./routes/drinks");
const cocktailsRouter = require("./routes/cocktails");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const allowedOrigins = [
  "http://localhost:3000",
  "https://your-other-domain.com",
];

const mongoUser = process.env.MONGO_ROOT_USER;
const mongoPass = process.env.MONGO_ROOT_PASSWORD;
const mongoHost = "mongo-db";
const mongoPort = "27017";
const mongoDB = "cocktailDB";

const MONGODB_URI = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
};
app.use(cors(corsOptions));
app.use(express.json());
mongoose.connect(MONGODB_URI, { dbName: mongoDB });

app.use("/drinks", drinksRouter);
app.use("/cocktails", cocktailsRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

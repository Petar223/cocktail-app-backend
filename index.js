const env = process.env.NODE_ENV || "development";

if (env === "development") {
  require("dotenv").config({ path: `.env.${env}` });
}
const pera = "pera";
const express = require("express");
const mongoose = require("mongoose");
const drinksRouter = require("./routes/drinks");
const cocktailsRouter = require("./routes/cocktails");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
ORT = process.env.PORT || 3000;
const allowedOrigins = [
  "http://localhost:3000",
  "https://your-other-domain.com",
];
const mongoUser = process.env.MONGO_ROOT_USER;
const mongoPass = process.env.MONGO_ROOT_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDB = process.env.MONGO_DB;

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
mongoose.connect(MONGODB_URI, {
  dbName: mongoDB,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/drinks", drinksRouter);
app.use("/cocktails", cocktailsRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

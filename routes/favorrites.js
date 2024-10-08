const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware.verifyToken, favoriteController.addFavorite);

router.get("/", authMiddleware.verifyToken, favoriteController.getFavorites);

router.post(
  "/remove",
  authMiddleware.verifyToken,
  favoriteController.removeFavorite
);

module.exports = router;

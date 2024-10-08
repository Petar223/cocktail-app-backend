const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/drinkController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.verifyToken, drinkController.getAllDrinks);

router.get("/:id", authMiddleware.verifyToken, drinkController.getDrinkById);

router.post(
  "/",
  [authMiddleware.verifyToken, authMiddleware.hasRole("general")],
  drinkController.createDrink
);

router.delete(
  "/:id",
  [authMiddleware.verifyToken, authMiddleware.hasRole("admin")],
  drinkController.deleteDrink
);

router.patch(
  "/:id/favorite",
  authMiddleware.verifyToken,
  drinkController.toggleFavorite
);

module.exports = router;

const express = require("express");
const router = express.Router();
const cocktailController = require("../controllers/cocktailsController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.verifyToken, cocktailController.getAllCocktails);

router.get(
  "/:id",
  authMiddleware.verifyToken,
  cocktailController.getCocktailById
);

router.post(
  "/",
  [authMiddleware.verifyToken, authMiddleware.hasRole("general")],
  cocktailController.createCocktail
);

router.patch(
  "/:id",
  [authMiddleware.verifyToken, authMiddleware.hasRole("general")],
  cocktailController.updateCocktail
);

router.delete(
  "/:id",
  [authMiddleware.verifyToken, authMiddleware.hasRole("admin")],
  cocktailController.deleteCocktail
);

module.exports = router;

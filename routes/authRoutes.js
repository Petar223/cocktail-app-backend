const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const validators = require("../middleware/validators");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check } = require("express-validator");

router.post(
  "/register",
  validators.registerValidation,
  authController.register
);

router.post("/login", authController.login);

router.post("/logout", authMiddleware.verifyToken, authController.logout);

router.get("/verifyToken", authController.verifyToken);

module.exports = router;

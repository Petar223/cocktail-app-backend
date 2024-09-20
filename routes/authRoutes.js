const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/logout", authMiddleware.verifyToken, (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  res.status(200).json({ message: "Logout successful" });
});

router.get("/verifyToken", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token." });
    }

    res.status(200).json({
      valid: true,
      role: decoded.role,
    });
  });
});

module.exports = router;

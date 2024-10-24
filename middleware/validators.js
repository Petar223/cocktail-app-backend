const { check } = require("express-validator");

exports.registerValidation = [
  check("username", "Username is required").notEmpty(),
  check("email", "Please provide a valid email").isEmail(),
  check("password", "Password must be at least 8 characters").isLength({
    min: 8,
  }),
];


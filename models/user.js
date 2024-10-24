const mongoose = require("mongoose");
const hashPassword = require("../middleware/hashPassword");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "general", "admin"],
    default: "user",
  },
});


userSchema.pre("save", hashPassword);

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },

  role: {
    type: String,
    enum: ["student", "faculty"],
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
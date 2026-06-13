const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

function generatePassword() {
  return (
    "ORIC@" +
    Math.floor(1000 + Math.random() * 9000)
  );
}

router.post("/register", async (req, res) => {
  try {
    const { email, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const generatedPassword = generatePassword();

    const hashedPassword =
      await bcrypt.hash(generatedPassword, 10);

    const user = new User({
      email,
      role,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({
      message: "User Registered",
      generatedPassword
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    res.json({
      message: "Login Successful",
      role: user.role
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
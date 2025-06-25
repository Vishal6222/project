const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json("User already exists");

  const hash = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hash });
  await user.save();
  res.json("User registered");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json("Invalid password");

  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token });
});

module.exports = router;

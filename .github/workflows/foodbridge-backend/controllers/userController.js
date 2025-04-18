
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: "Error registering user" });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(400).json({ message: "Error logging in" });
  }
};

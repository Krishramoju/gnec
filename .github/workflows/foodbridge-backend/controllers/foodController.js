
const Food = require("../models/Food");

exports.createFoodDonation = async (req, res) => {
  const { name, quantity, donor } = req.body;
  try {
    const food = new Food({ name, quantity, donor });
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ message: "Error creating food donation" });
  }
};

exports.getFoodDonations = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(400).json({ message: "Error fetching food donations" });
  }
};

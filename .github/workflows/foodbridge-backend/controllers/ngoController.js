
const NGO = require("../models/NGO");

exports.createNGO = async (req, res) => {
  const { name, location, contactInfo } = req.body;
  try {
    const ngo = new NGO({ name, location, contactInfo });
    await ngo.save();
    res.status(201).json(ngo);
  } catch (err) {
    res.status(400).json({ message: "Error creating NGO" });
  }
};

exports.getNGOs = async (req, res) => {
  try {
    const ngos = await NGO.find();
    res.status(200).json(ngos);
  } catch (err) {
    res.status(400).json({ message: "Error fetching NGOs" });
  }
};

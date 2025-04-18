
const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, required: true },
  foodReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
});

module.exports = mongoose.model("NGO", ngoSchema);

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  donor: { type: String, required: true },
  ngoAssigned: { type: mongoose.Schema.Types.ObjectId, ref: "NGO" },
});

module.exports = mongoose.model("Food", foodSchema);

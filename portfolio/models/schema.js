const mongoose = require("mongoose");

const projSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
});

module.exports = mongoose.model("Proj", projSchema);

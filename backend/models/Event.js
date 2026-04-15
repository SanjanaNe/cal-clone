const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  slug: { type: String, unique: true }
});

module.exports = mongoose.model("Event", EventSchema);
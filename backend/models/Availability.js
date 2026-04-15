const mongoose = require("mongoose");

const AvailabilitySchema = new mongoose.Schema({
  day: String,
  startTime: String,
  endTime: String
});

module.exports = mongoose.model("Availability", AvailabilitySchema);
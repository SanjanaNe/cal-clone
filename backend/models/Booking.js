const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
});

module.exports = mongoose.model("Booking", BookingSchema);
const router = require("express").Router();
const Booking = require("../models/Booking");

// Create Booking (prevent double booking)
router.post("/", async (req, res) => {
  const { date, time, eventId } = req.body;

  const exists = await Booking.findOne({ date, time, eventId });

  if (exists) {
    return res.status(400).json({ msg: "Slot already booked" });
  }

  const booking = new Booking(req.body);
  await booking.save();

  res.json(booking);
});

module.exports = router;
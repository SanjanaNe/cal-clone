const router = require("express").Router();
const Event = require("../models/Event");

// Create Event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
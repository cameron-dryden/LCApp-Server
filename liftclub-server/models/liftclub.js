const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  timeIn: String,
  timeOut: String,
});

const liftclubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  days: { type: [dateSchema] },
  location: {
    type: String,
    required: true,
  },
  pickup_radius: {
    type: Number,
  },
});

const Liftclub = mongoose.model("Liftclub", liftclubSchema);

module.exports = Liftclub;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  ownedLiftclub: { type: mongoose.Types.ObjectId },
  joined_liftclubs: [mongoose.Types.ObjectId],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

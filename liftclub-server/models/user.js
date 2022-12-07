const mongoose = require("mongoose");

const nameRegex = /^(?=.{1,50}$)[a-z]+(?:['-\s][a-z]+)*$/gim;
const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
    validate: {
      validator: function (value) {
        return nameRegex.test(value);
      },
      message: "Invalid name. Only letters, hyphens and spaces allowed.",
    },
  },
  surname: {
    type: String,
    required: [true, "Surname is a required field"],
    validate: {
      validator: function (value) {
        return nameRegex.test(value);
      },
      message: "Invalid surname. Only letters, hyphens and spaces allowed.",
    },
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    validate: {
      validator: function (value) {
        return passwordRegex.test(value);
      },
      message:
        "Password should contain:\n> Minimum 6 letters\nAt least one:\n> Upper case letter\n> Lower case letter\n> Digit\n> Special character",
    },
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
    validate: {
      validator: function (value) {
        return emailRegex.test(value);
      },
      message: "Invalid email address",
    },
  },
  ownedLiftclub: { type: mongoose.Types.ObjectId },
  joined_liftclubs: [mongoose.Types.ObjectId],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

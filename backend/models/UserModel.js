const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name."],
    },
    email: {
      type: String,
      require: [true, "Please add an email."],
      unique: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      require: [true, "Please add a password."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  yearsOld: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("users", userSchema);

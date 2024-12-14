const { default: mongoose } = require("mongoose");
const timestamp = require("mongoose-timestamp");

module.exports = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    password: String,
  }).plugin(timestamp)
);

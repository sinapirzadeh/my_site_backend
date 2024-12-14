const mongoose = require("mongoose");
const mongoTime = require("mongoose-timestamp");

module.exports = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    is_read: { type: Boolean, default: false },
  }).plugin(mongoTime)
);

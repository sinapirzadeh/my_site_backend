const mongoose = require("mongoose");
const mongoTime = require("mongoose-timestamp");

module.exports = mongoose.model(
  "Comment",
  new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    is_trusted: { type: Boolean, default: false },
  }).plugin(mongoTime)
);

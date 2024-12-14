const mongoose = require("mongoose");
const mongoTime = require("mongoose-timestamp");

module.exports = mongoose.model(
  "Message",
  new mongoose.Schema({
    subject: { type: String, required: true },
    comment: { type: String, required: true },
    is_read: { type: Boolean, default: false },
  }).plugin(mongoTime)
);

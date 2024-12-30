const mongoose = require("mongoose");

module.exports = mongoose.model(
  "IP",
  new mongoose.Schema({
    ip: { type: String },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: true,
    },
  })
);

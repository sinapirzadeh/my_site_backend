const { default: mongoose } = require("mongoose");

module.exports = mongoose.model(
  "Ip",
  new mongoose.Schema({
    ip: { type: String },
    isArticleLike: { type: Boolean, default: false },
    article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  })
);

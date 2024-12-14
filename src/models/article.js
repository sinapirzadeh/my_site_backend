const mongoose = require("mongoose");
const mongoTime = require("mongoose-timestamp");

module.exports = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: { type: String, required: true, length: { min: 5 } },
    image_url: { type: String, required: true },
    imgae_alt: String,
    short_description: { type: String, required: true, length: { max: 30 } },
    description: { type: String, required: true },
    related_articles: [String],
    visitor_counter: Number,
  }).plugin(mongoTime)
);

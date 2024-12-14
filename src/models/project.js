const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Project",
  new mongoose.Schema({
    name: String,
    frameworks: [String],
    image_url: String,
    image_alt: String,
  })
);

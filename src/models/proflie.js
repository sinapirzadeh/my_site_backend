const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Proflie",
  new mongoose.Schema(
    {
      name: String,
      short_des: String,
      descirption: String,
      image_url: String,
      image_alt: String,
      telegram_url: String,
      linkedin_url: String,
      github_url: String,
      rezome_url: String,
      is_delete: Boolean,
    },
    {
      timestamps: true,
    }
  )
);

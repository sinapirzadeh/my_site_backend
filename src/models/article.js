const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Article",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      image: { type: String },
      image_alt: { type: String, required: true },
      description: { type: String, required: true },
      like_count: { type: Number, default: 0 },
      comments: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
      meta_description: { type: String, maxlength: 160 },
      meta_keywords: [String],
      is_delete: { type: Boolean, default: false },
      short_url: String,
      tags: [String],
    },
    {
      timestamps: true,
    }
  )
);

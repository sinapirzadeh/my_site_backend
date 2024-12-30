const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Comment",
  new mongoose.Schema(
    {
      name: { type: String, required: true, max: [50, "متن طولانی است"] },
      message: { type: String, required: true, max: [700, "متن طولانی است"] },
      is_trusted: { type: Boolean, default: false },
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
        required: true,
      },
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

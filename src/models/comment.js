const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Comment",
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      message: { type: String, required: true },
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

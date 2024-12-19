const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Message",
  new mongoose.Schema(
    {
      subject: { type: String, required: true },
      comment: { type: String, required: true },
      is_read: { type: Boolean, default: false },
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

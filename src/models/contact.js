const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Contact",
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      message: { type: String, required: true },
      is_delete: { type: Boolean, default: false },
      is_read: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

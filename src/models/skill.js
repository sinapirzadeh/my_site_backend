const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Skill",
  new mongoose.Schema(
    {
      title: String,
      process: Number,
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

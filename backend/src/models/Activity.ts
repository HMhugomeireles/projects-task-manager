const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    token: {
      type: mongoose.Schema.Types.String,
    },
    host: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    attempts: {
      type: mongoose.Schema.Types.number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", ActivitySchema);

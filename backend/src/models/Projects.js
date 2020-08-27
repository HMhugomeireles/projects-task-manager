const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    projectName: { type: mongoose.Schema.Types.String, required: true },
    tasks: [
      {
        description: { type: mongoose.Schema.Types.String, required: true },
        createDate: {
          type: mongoose.Schema.Types.Number,
          default: Date.now,
        },
        finishDate: { type: mongoose.Schema.Types.Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", ProjectSchema);

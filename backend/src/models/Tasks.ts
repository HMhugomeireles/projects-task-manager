const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Projects",
      required: true,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    doneBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    description: { type: mongoose.Schema.Types.String, required: true },
    isFinished: { type: mongoose.Schema.Types.Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tasks", TaskSchema);

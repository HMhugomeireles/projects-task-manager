import { model, Schema } from 'mongoose';

interface ITask {
  projectId: string;
  createBy: string;
  doneBy?: string;
  description: string;
  isFinished: boolean;
}

const TaskSchema = new Schema({
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
},{
  timestamps: true,
});

const TaskModel = model<ITask>("Tasks", TaskSchema)

export { TaskModel, ITask };

import { model, Schema } from 'mongoose';
import { ITask } from './Tasks';

interface IProject {
  userId: string;
  projectName: string;
  description: string;
  tasks: ITask;
}

const ProjectSchema = new Schema<IProject>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  projectName: { type: mongoose.Schema.Types.String, required: true },
  description: { type: mongoose.Schema.Types.String, required: true },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  },{
    timestamps: true,
  }
);

const ProjectModel = model<IProject>("Projects", ProjectSchema)

export { ProjectModel, IProject };


import { model, Schema } from 'mongoose';

interface IActivity {
  userId: string;
  token: string;
  host: string;
  attempts: string;
}

const ActivitySchema = new Schema<IActivity>({
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
},{
  timestamps: true,
});


const ActivityModel = model<IActivity>("Activity", ActivitySchema)

export { ActivityModel, IActivity };

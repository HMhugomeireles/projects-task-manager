import { compare, hashSync } from 'bcryptjs';
import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
  userId: string;
  username: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: mongoose.Schema.Types.String, required: true },
  password: { type: mongoose.Schema.Types.String, required: true },
},{
  timestamps: true,
});

UserSchema.pre("save", function (next) {
  this.password = hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = (passPlanText: string, hash: string) => {
  return compare(passPlanText, hash);
};

const UserModel = model<IUser>("Users", UserSchema)

export { UserModel, IUser };


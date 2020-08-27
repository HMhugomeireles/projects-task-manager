const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    username: { type: mongoose.Schema.Types.String, required: true },
    password: { type: mongoose.Schema.Types.String, required: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = (passPlanText, hash) => {
  return bcrypt.compare(passPlanText, hash);
};

module.exports = mongoose.model("Users", UserSchema);

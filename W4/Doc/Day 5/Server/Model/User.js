import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  username: String,
  dataofBirth: Date,
  passwords: String,
  followers: [],
  following: [],
  tweets: [],
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = { userModel, userSchema };

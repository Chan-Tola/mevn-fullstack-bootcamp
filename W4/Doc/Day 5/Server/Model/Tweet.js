import mongoose from "mongoose";
const { userSchema } = require("./User");
const schema = mongoose.Schema;

const tweetSchema = new Schema({
  byUser: userSchema,
  text: { type: String, require: true },
  createDate: { type: Date, require: true },
});

const tweetModel = mongoose.model("tweetModel", tweetSchema);
module.exports = { tweetModel, tweetSchema };

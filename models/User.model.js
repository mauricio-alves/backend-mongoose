const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;

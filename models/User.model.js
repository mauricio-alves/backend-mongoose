const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  fruits: [{ type: Types.ObjectId, ref: "Fruit" }],
});

const UserModel = model("User", userSchema);

module.exports = UserModel;

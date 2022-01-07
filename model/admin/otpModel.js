const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "admin",
  },
  email: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  expireIn: {
    type: String,
    required: true,
  },
});
var Otp = mongoose.model("otp", userSchema);
module.exports = Otp;

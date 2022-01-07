var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Question = mongoose.model("question", questionSchema);
module.exports = Question;

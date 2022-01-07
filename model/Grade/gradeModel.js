const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gradeSchema = new Schema(
  {
    grade: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

var Grade = mongoose.model("grade", gradeSchema);
module.exports = Grade;

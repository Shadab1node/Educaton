var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema(
  {
    coursename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Course = mongoose.model("course", courseSchema);
module.exports = Course;

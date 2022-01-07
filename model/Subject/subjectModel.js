var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subjectSchema = new Schema(
  {
    subjectname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var topicSchema = new Schema(
  {
    topicname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Topic = mongoose.model("topic", topicSchema);
module.exports = Topic;

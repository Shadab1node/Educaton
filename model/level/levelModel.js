var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var levelSchema = new Schema(
  {
    addlevel: {
      type: String,
      required: true,
    },
    mark: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Level = mongoose.model("level", levelSchema);
module.exports = Level;

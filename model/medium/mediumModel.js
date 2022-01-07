const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediumSchema = new Schema(
  {
    language: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

var Medium = mongoose.model("language", mediumSchema);
module.exports = Medium;

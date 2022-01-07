const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const boardSchema = new Schema(
  {
    boardname: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

var Board = mongoose.model("board", boardSchema);
module.exports = Board;

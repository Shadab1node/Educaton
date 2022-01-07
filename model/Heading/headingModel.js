const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const headingSchema = new Schema(
  {
   
    bookname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Heading = mongoose.model("heading", headingSchema);
module.exports = Heading;

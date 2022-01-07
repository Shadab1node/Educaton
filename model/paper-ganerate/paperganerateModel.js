const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paperSchema = new Schema({
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "board",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "course",
  },
  gradeId: {
    type: Schema.Types.ObjectId,
    ref: "grade",
  },
  headingId: {
    type: Schema.Types.ObjectId,
    ref: "heading",
  },
  levelId: {
    type: Schema.Types.ObjectId,
    ref: "level",
  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: "question",
  },
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: "subject",
  },
  topicId: {
    type: Schema.Types.ObjectId,
    ref: "topic",
  },
  languageId: {
    type: Schema.Types.ObjectId,
    ref: "language",
  },
});
var Paper = mongoose.model("paperE", paperSchema);
module.exports = Paper;

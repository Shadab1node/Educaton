const Question = require("../../model/Question/questionModel");

exports.addQuestion = async (req, res) => {
  try {
    const question = new Question();
    question.question = req.body.question;
    question.save();
    res.json({
      msg: "question added successfully",
      data: question,
    });
  } catch (error) {
    res.json({
      msg: "something went wrong",
    });
  }
};

exports.getallquestion = async (req, res) => {
  try {
    const getallquestion = await Question.find({});
    return res
      .status(200)
      .json({ msg: "get all question successfully", getallquestion });
  } catch (error) {
    return res.status(500).json({ msg: "error find in get the question" });
  }
};

exports.getquestionbyid = async (req, res) => {
  try {
    const getquestionbyid = await Question.findById({ _id: req.params.id });
    return res.status(200).json({
      msg: "find the question get by id successfully",
      getquestionbyid,
    });
  } catch (error) {
    return res.status(500).json("something went wrong");
  }
};

exports.updatequestion = async (req, res) => {
  try {
    const question = req.body.question;
    const updatequestion = await Question.findByIdAndUpdate(req.params.id, {
      question,
    });
    return res
      .status(200)
      .json({ msg: "succefully update the data", updatequestion });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" });
  }
};

exports.deletequestion = async (req, res) => {
  try {
    const deletequestion = await Question.findByIdAndDelete({
      _id: req.params.id,
    });
    return res
      .status(200)
      .json({ msg: "successfully delete question ", deletequestion });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

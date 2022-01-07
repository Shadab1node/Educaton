const Grade = require("../../model/Grade/gradeModel");

exports.addgrade = async (req, res) => {
  try {
    const grade = new Grade();
    grade.grade = req.body.grade;
    grade.save();
    return res.status(200).json({ msg: "grade added successfully", grade });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getallgrade = async (req, res) => {
  try {
    const getallgrade = await Grade.find({});
    return res.status(200).json({ msg: "get all grade data", getallgrade });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getgrade = async (req, res) => {
  try {
    const getgrade = await Grade.findById({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "Successfull get Grade details by id", getgrade });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.updategradebyid = async (req, res) => {
  try {
    var grade = req.body.grade;
    const updategrade = await Grade.findByIdAndUpdate(req.params.id, {
      grade,
    });
    return res
      .status(200)
      .json({ msg: "successfully update the data", updategrade });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.deletegradebyid = async (req, res) => {
  try {
    const deletegrade = await Grade.findByIdAndDelete({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "successfully delete the data by id", deletegrade });
  } catch (error) {
    return res
      .status(200)
      .json({ msg: "something went wrong", error: error.message });
  }
};

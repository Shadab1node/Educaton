const Course = require("../../model/Course/courseModel");

exports.addcourse = async (req, res) => {
  try {
    const course = new Course();
    course.coursename = req.body.coursename;
    course.save();
    return res
      .status(200)
      .json({ Success: [{ msg: "Course add successfully" }, course] });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.getallcourse = async (req, res) => {
  try {
    const getallcourse = await Course.find({});
    return res.status(200).json({
      Success: [{ msg: "get all course successfully", getallcourse }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.getcoursebyid = async (req, res) => {
  try {
    const getcoursebyid = await Course.findById({ _id: req.params.id });
    return res.status(200).json({
      Success: [{ msg: "get course by id successfully", getcoursebyid }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.updatecourse = async (req, res) => {
  try {
    const coursename = req.body.coursename;
    const updatecourse = await Course.findByIdAndUpdate(req.params.id, {
      coursename,
    });
    return res.status(200).json({
      Success: [{ msg: "update course by id successfully", updatecourse }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.deletecourse = async (req, res) => {
  try {
    const deletecourse = await Course.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).json({
      Success: [{ msg: "delete course by id successfully", deletecourse }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

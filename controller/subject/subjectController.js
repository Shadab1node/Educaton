const Subject = require("../../model/Subject/subjectModel");

exports.addsubject = async (req, res) => {
  try {
    const subject = new Subject();
    subject.subjectname = req.body.subjectname;
    subject.save();
    return res
      .status(200)
      .json({ Success: [{ msg: "subject add successfully" }, subject] });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.getallsubject = async (req, res) => {
  try {
    const getallsubject = await Subject.find({});
    return res.status(200).json({
      Success: [{ msg: "get all subject successfully", getallsubject }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.getsubjectbyid = async (req, res) => {
  try {
    const getsubjectbyid = await Subject.findById({ _id: req.params.id });
    return res.status(200).json({
      Success: [{ msg: "get subject by id successfully", getsubjectbyid }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.updatesubject = async (req, res) => {
  try {
    const subjectname = req.body.subjectname;
    const updatesubject = await Subject.findByIdAndUpdate(req.params.id, {
      subjectname,
    });
    return res.status(200).json({
      Success: [{ msg: "update subject by id successfully", updatesubject }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

exports.deletesubject = async (req, res) => {
  try {
    const deletesubject = await Subject.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).json({
      Success: [{ msg: "delete subject by id successfully", deletesubject }],
    });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

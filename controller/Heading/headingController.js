const Heading = require("../../model/Heading/headingModel");

exports.addheading = async (req, res) => {
  try {
    const heading = new Heading();
    heading.bookname = req.body.bookname;
    heading.save();
    return res.status(200).json({ msg: "heading add succefully", heading });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getallheading = async (req, res) => {
  try {
    const getallheading = await Heading.find({})
      .populate("levelId")
      .populate("questionId");
    return res
      .status(200)
      .json({ msg: "successfully get all heading", getallheading });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getheadingbyid = async (req, res) => {
  try {
    const getheading = await Heading.findById({ _id: req.params.id })
      .populate("levelId")
      .populate("questionId");
    return res
      .status(200)
      .json({ msg: "successfully find the data by id", getheading });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.updatebyid = async (req, res) => {
  try {
    const bookname = req.body.bookname;
    const updatebyid = await Heading.findByIdAndUpdate(req.params.id, {
      bookname,
    });
    return res
      .status(200)
      .json({ msg: "heading update successfully", updatebyid });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    const deletebyid = await Heading.findByIdAndDelete({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "successfull delete the heading", deletebyid });
  } catch (error) {
    return res
      .status(400)
      .status({ msg: "something went wrong", error: error.message });
  }
};

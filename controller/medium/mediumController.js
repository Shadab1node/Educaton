const Medium = require("../../model/medium/mediumModel");

exports.addmedium = async (req, res) => {
  try {
    const medium = new Medium();
    medium.language = req.body.language;
    medium.save();
    return res.status(200).json({ msg: "successfully add medium", medium });
  } catch (error) {
    return res
      .status(200)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getallmedium = async (req, res) => {
  try {
    const getallmedium = await Medium.find({});
    return res
      .status(200)
      .json({ msg: "successfully get all medium", getallmedium });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getmediumbyid = async (req, res) => {
  try {
    const getmediumbyid = await Medium.findById({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "successfully get the medium by id", getmediumbyid });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.updatemedium = async (req, res) => {
  try {
    const medium = req.body.medium;
    const updatemedium = await Medium.findByIdAndUpdate(req.params.id, {
      medium,
    });
    return res
      .status(200)
      .json({ msg: "successfully update the medium", updatemedium });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.deletemedium = async (req, res) => {
  try {
    const deletemedium = await Medium.findByIdAndDelete({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "successfull delete medium", deletemedium });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

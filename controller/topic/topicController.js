const Topic = require("../../model/Topic/topicModel");

exports.addtopic = async (req, res) => {
  try {
    const topic = new Topic();
    topic.topicname = req.body.topicname;
    topic.save();
    return res
      .status(200)
      .json({ Success: [{ msg: "data add successfully", topic }] });
  } catch (error) {
    return res.status(400).json({ Success: [{ msg: "something went wrong" }] });
  }
};

exports.getalltopic = async (req, res) => {
  try {
    const getalltopic = await Topic.find({});
    return res
      .status(200)
      .json({ msg: "get all topic successfully", getalltopic });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.gettopicbyid = async (req, res) => {
  try {
    const gettopicbyid = await Topic.findById({ _id: req.params.id });
    return res.status(200).json({
      msg: "find the topic get by id successfully",
      gettopicbyid,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.updatetopic = async (req, res) => {
  try {
    const topicname = req.body.topicname;
    const updatetopic = await Topic.findByIdAndUpdate(req.params.id, {
      topicname,
    });
    return res
      .status(200)
      .json({ msg: "succefully update the data", updatetopic });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.deletetopic = async (req, res) => {
  try {
    const deletetopic = await Topic.findByIdAndDelete({
      _id: req.params.id,
    });
    return res
      .status(200)
      .json({ msg: "successfully delete topic ", deletetopic });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

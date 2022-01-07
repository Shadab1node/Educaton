const Level = require("../../model/level/levelModel");

exports.addLevel = async (req, res) => {
  try {
    const level = new Level();
    level.addlevel = req.body.addlevel;
    level.mark = req.body.mark;
    level.save();
    res.json({
      msg: "level added successfully",
      data: level,
    });
  } catch (error) {
    res.json({
      msg: "error find in adding the level",
    });
  }
};

exports.getalllevel = async (req, res) => {
  try {
    const getLevel = await Level.find({});
    return res
      .status(200)
      .json({ msg: "get all level successfully", getLevel });
  } catch (error) {
    return res.status(500).json({ msg: "error find in get the level" });
  }
};

exports.getlevel = async (req, res) => {
  try {
    const getlevelbyid = await Level.findById({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "find the level get by id successfully", getlevelbyid });
  } catch (error) {
    return res.status(500).json({ msg: "error find in get the data by id" });
  }
};

exports.updatelevel = async (req, res) => {
  try {
    const { addlevel, mark } = req.body;
    const updatelevel = await Level.findByIdAndUpdate(req.params.id, {
      addlevel,
      mark,
    });
    return res
      .status(200)
      .json({ msg: "succefully update the data", updatelevel });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" });
  }
};

exports.deletelevel = async (req, res) => {
  try {
    const deletelevel = await Level.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ deletelevel });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
  }
};

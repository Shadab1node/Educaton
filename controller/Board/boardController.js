const Board = require("../../model/Board/board-model");

exports.addboard = async (req, res) => {
  try {
    const board = new Board();
    board.boardname = req.body.boardname;
    board.save();
    return res.status(200).json({ msg: "board added successfully", board });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getallboards = async (req, res) => {
  try {
    const getallboard = await Board.find({});
    return res.status(200).json({ msg: "get all board data", getallboard });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.getboardbyid = async (req, res) => {
  try {
    const getboardbyid = await Board.findById({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "Successfull get board details by id", getboardbyid });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.updateboardbyid = async (req, res) => {
  try {
    var boardname = req.body.boardname;
    const updateboard = await Board.findByIdAndUpdate(req.params.id, {
      boardname,
    });
    return res
      .status(200)
      .json({ msg: "successfully update the data", updateboard });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "something went wrong", error: error.message });
  }
};

exports.deleteboardbyid = async (req, res) => {
  try {
    const deleteboard = await Board.findByIdAndDelete({ _id: req.params.id });
    return res
      .status(200)
      .json({ msg: "successfully delete the data by id", deleteboard });
  } catch (error) {
    return res
      .status(200)
      .json({ msg: "something went wrong", error: error.message });
  }
};
